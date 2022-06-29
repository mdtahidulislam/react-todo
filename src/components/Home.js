import React, { useState } from 'react'
import NewTodo from './NewTodo'
import Todos from './Todos'
import { v4 as uuidv4 } from 'uuid';


// const todosList = [
//     {id:1, title: 'One', desc: 'This is first todo'},
//     {id:2, title: 'Two', desc: 'This is second todo'},
//     {id:3, title: 'Three', desc: 'This is third todo'},
// ]



function Home() {
    const [todos, setTodos] = useState([]);

    const handleNewTodo = (newTodo) => {
        setTodos( (oldTodos) => {
            return [...oldTodos, {id: uuidv4(), newTodo}];
        });
    }
    const handleDeleteTodo = (todoId) => {
        const filterdTodo = todos.filter( (todo) => {
            return todoId !== todo.id;
        });
        setTodos(filterdTodo);
    }
  return (
    <>
        <NewTodo onhandleNewTodo={handleNewTodo}></NewTodo>
        <Todos todos={todos} handleDeleteTodo={handleDeleteTodo}></Todos>
    </>
  )
}

export default Home