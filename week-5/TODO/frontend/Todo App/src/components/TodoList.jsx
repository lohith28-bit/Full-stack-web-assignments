import { useEffect, useState } from "react";

function TodoList() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const res_json = await res.json();
        setData(res_json.Todos)
      })
  }, [data])

  const handCompleted = (e) => {
    fetch('http://localhost:3000/completed', {
      method: "PUT",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ id: e.target.id })
    })
  }
  const handDelete = (e) => {
    fetch('http://localhost:3000/delete', {
      method: "DELETE",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ id: e.target.id })
    })
  }
  return (
    <>
      <div>
        {data.map((task, id) => (
          <div className='Taskbox' key={id}>
            <div className="Task" >
              <p>Title: {task.title}</p>
              <p>Description: {task.description}</p>
            </div>
            <button id={task._id} onClick={(e) => handCompleted(e)}>{task.completed ? "Completed " : "Mark as Complete"}</button>
            <button id={task._id} onClick={(e) => handDelete(e)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default TodoList
