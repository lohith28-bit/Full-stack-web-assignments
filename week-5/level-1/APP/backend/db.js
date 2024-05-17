const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL);

const profileSchema = mongoose.Schema({
	Name : String,
	Description : String,
	Interest : Array,
	LinkedIn : String,
	Twitter : String
})
const card_data = mongoose.model("card_data", profileSchema)

module.exports = {card_data}
