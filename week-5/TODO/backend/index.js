require('dotenv').config()
const express = require('express');
const { todo } = require('./db');
const app = express();

app.use(express.json())


app.post('/todo', async (req, res) => {
	const { title, description } = req.body;
	try {
		const newTodo = await todo.create({
			title,
			description,
			completed: false
		});
		res.json({
			msg: "Todo created",
			Todo: newTodo
		});
	} catch (err) {
		res.status(500).json({
			msg: "Error creating Todo",
			error: err.message
		});
	}
});

app.get("/todos", async (req,res) =>{
	try{
		const todos = await todo.find()
		res.json({
			Todos: todos
		})
	}catch(err){
		res.json({
			msg : "Its error"
		})
	}
	
})

app.put('/completed', (req,res) =>{
	return
})


app.listen(3000, ()=>{
	console.log("Server is running in PORT 3000");
})