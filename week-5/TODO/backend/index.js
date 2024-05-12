require('dotenv').config()
const express = require('express');
const { todo } = require('./db');
const { createTodo, updateTodo } = require('./types');
const app = express();
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.post('/todo', async (req, res) => {
	try {
		const createPayload = req.body;
		const checkPayload = createTodo.safeParse(createPayload)
		if (!checkPayload.success) {
			res.status(411).json({
				msg: "Wrong input formate"
			})
			return
		}
		const newTodo = await todo.create({
			title: createPayload.title,
			description: createPayload.title,
			completed: false
		});
		res.status(201).json({
			msg: "Todo created",
			Todo: newTodo
		});
	} catch (err) {
		res.status(500).json({
			msg: "Interanal server Error",
			error: err.message
		});
	}
});

app.get("/todos", async (req, res) => {
	try {
		const todos = await todo.find()
		res.json({
			Todos: todos
		})
	} catch (err) {
		res.json({
			msg: "Something went wrong"
		})
	}
})

app.put('/completed', async (req, res) => {
	try {
		const updatePayload = req.body;
		console.log(updatePayload);
		const checkPayload = updateTodo.safeParse(updatePayload)
		console.log(checkPayload.success);
		if (!checkPayload) {
			res.status(411).json({
				msg: "Wrong input formate"
			})
			return;
		}
		await todo.updateOne({
			_id: updatePayload.id,
		}, {
			completed: true
		})
		res.status(201).json({
			msg: "Task completed successfully"
		})
	} catch (err) {
		res.json({
			msg: "Something Went wrong",
			err: err.msg
		})
	}
})


app.listen(3000, () => {
	console.log("Server is running in PORT 3000");
})