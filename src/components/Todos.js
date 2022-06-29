import React from 'react'
import Todo from './Todo';



function Todos(props) {
    console.log(props)
  return (
    <div>
        <h2>My Todos</h2>
        <hr />
        <section>
            {
                props.todos.map((todo)=>(
                    <Todo key={todo.id} id={todo.id} todo={todo.newTodo} handleDeleteTodo={props.handleDeleteTodo}/>
                ))
            }
        </section>
    </div>
  )
}

export default Todos