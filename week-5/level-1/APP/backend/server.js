require('dotenv').config()
const express = require('express');
const { checkType } = require('./type');
const { card_data } = require('./db');
const app = express();


app.use(express.json())

app.post('/create', async (req, res) => {
	try {
		const createPayload = req.body;
		console.log(createPayload)
		const checkAuth = checkType.parse(createPayload);
		console.log(checkAuth)
		if (!checkAuth) {
			res.status(411).json({
				msg: "Invalid input formate"
			})
			return;
		}
		const newData = await card_data.create(createPayload)
		res.status(201).json({
			msg: "New card created successfully",
			card: newData
		})
	} catch (err) {
		res.json({
			msg: err.message
		})
	}
})


app.get('/create', (req, res) => {

})
app.put('/create', (req, res) => {

})
app.delete('/create', (req, res) => {

})

app.listen(3000, () => {
	console.log("The server is running in PORT 3000");
})
