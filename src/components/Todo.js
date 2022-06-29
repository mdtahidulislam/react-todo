import React from 'react'

function Todo(props) {
    const {title, desc} = props.todo;
    const todoId = props.id;
    const deleteTodo = (todoId) => {
        props.handleDeleteTodo(todoId);
    }
  return (
    <div>
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <div>
            <button type='button' onClick={()=>{deleteTodo(todoId)}}>delete</button>
        </div>
    </div>
  )
}

export default Todo