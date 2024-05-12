const zod = require('zod');

const createTodo = zod.object({
	title : zod.string().min(2),
	description : zod.string()
})

const updateTodo = zod.object({
	id : zod.string()
})

module.exports = {createTodo, updateTodo}