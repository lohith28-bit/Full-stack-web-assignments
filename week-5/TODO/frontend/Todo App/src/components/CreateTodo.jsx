import { useState } from "react";

function CreateTodo() {
	const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('')

	const handleSubmit = async () => {
		try {
			const res = await fetch('http://localhost:3000/todo', {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ title, description: desc })
			});

			if (res.ok) {
				setDesc("");
				setTitle("")
			} else {
				console.log("Opp something went wrong");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};



	return (
		<div>
			<form action="" onSubmit={handleSubmit}>
				<div className="p-10 m-28">
					<label>Enter the Task: </label>
					<input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Go the Gym" />
				</div>
				<div className="m-5">
					<label>Description: </label>
					<input type="text" onChange={(e) => setDesc(e.target.value)} placeholder="At 7am" />
				</div>
				<button type="submit">Add Task</button>
			</form>
		</div>
	)
}

export default CreateTodo
