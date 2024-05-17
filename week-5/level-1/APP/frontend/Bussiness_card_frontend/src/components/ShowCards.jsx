import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function ShowCards() {
	const [InputField, setInputField] = useState(-1)
	const [Name_data, setName_data] = useState('')
	const [Desc_data, setDesc_data] = useState('')
	const [Interest_data, setInterest_data] = useState('')
	const [LinkedIn_data, setLinkedIn_data] = useState('')
	const [Twitter_Data, setTwitter_data] = useState('')
	const [allCard, setAllCard] = useState([])
	useEffect(() => {
		fetch('http://localhost:3000/get_data')
			.then(response => response.json())
			.then((data) => {
				setAllCard(data.card_data)
			})
	}, [])

	const handleEdit = (e) => {
		if (e.target.className !== InputField) {
			setInputField(e.target.className);
			setName_data(allCard[e.target.className].Name);
			setDesc_data(allCard[e.target.className].Description);
			setInterest_data(allCard[e.target.className].Interest);
			setLinkedIn_data(allCard[e.target.className].LinkedIn);
			setTwitter_data(allCard[e.target.className].Twitter);
		} else {
			setInputField(-1);
			const editingIndex = e.target.className;
			const editingData = allCard[editingIndex];
			const Interest = Interest_data.replaceAll(' ', '').split(',');
			const UpdatedDate = {
				Name: Name_data,
				Description: Desc_data,
				Interest: Interest,
				LinkedIn: LinkedIn_data,
				Twitter: Twitter_Data
			}
			fetch(`http://localhost:3000/update?id=${editingData._id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(UpdatedDate)
			})
				.then((response) => {
					if (response.ok) {
						const updatedCards = [...allCard];
						updatedCards[editingIndex] = { ...editingData, ...UpdatedDate };
						setAllCard(updatedCards);
					}
					console.log("Data updated successfully");
					setInputField(-1);
				})
				.catch(error => {
					console.error("Error updating data:", error);
				});
		}
	}


	const handleDelete = (e) => {
		const deletionIndex = e.target.className
		const deletionData = allCard[deletionIndex]
		fetch(`http://localhost:3000/delete?id=${deletionData._id}`, {
			method: "DELETE"
		})
			.then(() => {
				console.log("Deleted Successfully")
				const UpdatedCard = allCard.filter((_, idx) => idx != deletionIndex)
				setAllCard(UpdatedCard)
				setInputField()
			})
	}

	return (
		<>
			<h1>Data Card</h1>
			<Link to='/'>
				<button>Home</button>
			</Link>
			<div>
				{
					allCard.map((ele, key) => (
						<div key={key}>
							{InputField == key ? <input type="text" value={Name_data} onChange={(e) => setName_data(e.target.value)} />
								: <h3>{ele.Name}</h3>}
							{InputField == key ? <input type="text" value={Desc_data} onChange={(e) => setDesc_data(e.target.value)} />
								: <h3>{ele.Description}</h3>}

							<div>

								{InputField == key ? <input type="text" value={Interest_data} onChange={(e) => setInterest_data(e.target.value)} />
									: ele.Interest.map(((interest, idx) => (
										<p key={idx}>{interest}</p>
									)))}
							</div>
							<div>
								{InputField == key ? <input type="text" value={LinkedIn_data} onChange={(e) => setLinkedIn_data(e.target.value)} />
									:
									<button className="link-button" onClick={() => window.open("https://" + ele.LinkedIn, '_blank')}>
										LinkedIN
									</button>}
								{InputField == key ? <input type="text" value={Twitter_Data} onChange={(e) => setTwitter_data(e.target.value)} />
									: <button className="link-button" onClick={() => window.open("https://" + ele.Twitter, '_blank')}>
										Twitter
									</button>}
							</div>
							<div>
								<button className={key} onClick={(e) => handleEdit(e)}>{InputField == key ? "Save" : "Edit"}</button>
								<button className={key} onClick={(e) => handleDelete(e)}>Delete</button>
							</div>
						</div>
					))
				}
			</div>
		</>
	)
}

export default ShowCards
