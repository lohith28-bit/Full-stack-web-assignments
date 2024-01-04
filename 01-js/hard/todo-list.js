/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todo_list = []
  }

  add(task) {
    this.todo_list.push(task)
  }

  remove(idx) {
    this.todo_list = this.todo_list.filter((tsk, i) => i !== idx)
  }

  update(idx, task) {
    this.todo_list = this.todo_list.map((tsk, i) => i === idx ? task : tsk)
  }

  getAll() {
    return this.todo_list
  }

  get(idx) {
    if (idx < 0 || idx >= this.todo_list.length) {
      return null;
    }
    return this.todo_list[idx]
  }

  clear() {
    this.todo_list = []
  }
}


module.exports = Todo;
