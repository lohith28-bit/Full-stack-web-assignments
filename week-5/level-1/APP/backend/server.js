require('dotenv').config()
const express = require('express');
const { checkType } = require('./type');
const { card_data } = require('./db');
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(cors())

app.post('/create', async (req, res) => {
    try {
        const createPayload = req.body;
        const checkAuth = checkType.safeParse(createPayload);
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

app.get('/get_data', async (req, res) => {
    try {
        const data = await card_data.find();
        res.status(200).json({
            card_data: data
        })
    } catch (err) {
        res.status(411).json({
            msg: err.message
        })
    }
})

app.put('/update', async (req, res) => {
    try {
        //
        const card_id = req.query.id;
        const updated_data = req.body;
        const check_updated_data = checkType.safeParse(updated_data)
        if (!check_updated_data) {
            res.status(411).json({
                msg: "Something went wrong"
            })
            return
        }
        const final_data = await card_data.findOneAndUpdate({
            "_id": card_id
        }, updated_data, { new: true })
        res.status(201).json({
            msg: "Card Updated successfully",
            'card_data': final_data
        })
    } catch (err) {
        res.status(411).json({
            msg: err.message
        })
    }
})
app.delete('/delete', async (req, res) => {
    try {
        const ID_payload = req.query.id;
        const data = await card_data.deleteOne({
            '_id': ID_payload
        })
        res.status(200).json({
            msg: "Card deleted successfully",
            card: data
        })
    } catch (err) {
        res.status(411).json({
            msg: err.message
        })
    }
})

app.listen(3000, () => {
    console.log("The server is running in PORT 3000");
})
