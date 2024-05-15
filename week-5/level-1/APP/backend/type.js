const zod = require('zod')

const checkType = zod.object({
	Name: zod.string(),
	Description: zod.string(),
	Interest: zod.array(zod.string()).min(1),
	LinkedIn: zod.string(),
	Twitter: zod.string(),
})

const checkID = zod.object({
	id : zod.string()
})

module.exports = {checkType, checkID}