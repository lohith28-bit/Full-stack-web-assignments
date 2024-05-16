import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function ShowCards() {
    const [Name_data, setName_data] = useState('')
    const [Desc_data, setDesc_data] = useState('')
    const [Interest_data, setInterest_data] = useState('')
    const [LinkedIn_data, setLinkedIn_data] = useState('')
    const [Twitter_Data, setTwitter_data] = useState('')
    const [allCard, setAllCard] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/get_data')
            .then((data) => {
                setAllCard(data.card_data)
            })
    }, [])

    const handleEdit = (e) => {
        const editingData = allCard[e.target.class]
        fetch(`http://localhost:3000/update?title_idx=${e.target.id}&title=`, {
            method: "PUT",
            header: {
                "Content_Type": "application/json"
            },
            body: JSON.stringify({
                id: editingData._id
            })
        })
    }

    const handleDelete = (e) => {
        const deletionData = allCard[e.target.class]
        fetch(`http://localhost:3000/delete?id=${deletionData._id}`)
            .then(() => {
                console.log("Deleted Successfully")
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
                            <h3>ele.Name</h3>
                            <h3>ele.Description</h3>
                            <h3>{ele.Interest.map(((ele, idx) => (
                                <p key={idx}> </p>
                            )))}</h3>
                            <div>
                                <button href={ele.Instagram}>
                                    Intsagram
                                </button>
                                <button href={ele.Twitter}>
                                    Twitter
                                </button>
                            </div>
                            <div>
                                <button className={key} onClick={(e) => handleEdit(e)}>Edit</button>
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
