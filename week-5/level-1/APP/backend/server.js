require('dotenv').config()
const express = require('express');
const { checkType, checkID } = require('./type');
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
        const card_id_payload = req.body;
        const check_card_id = checkID.safeParse(card_id_payload)
        if (!check_card_id) {
            res.status(411).json({
                msg: "Something went wrong"
            })
            return
        }
        const data_title = ["Name", "Description", "Interest", "LinkedIn", "Twitter"]
        const title_idx = req.query.title_idx
        const changingTitle = data_title[title_idx]
        const updatingObject = {}
        updatingObject[changingTitle] = (title_idx == 2) ? req.query.title.split(',').map(e => e.trim()) : req.query.title
        const data = await card_data.findOneAndUpdate({
            "_id": card_id_payload.id,
        }, updatingObject, { new: true })
        res.status(200).json({
            msg: "Card Updated successfully",
            'card_data': data
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
