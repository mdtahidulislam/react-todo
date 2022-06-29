import React, { useState } from 'react'


function NewTodo(props) {
    // console.log(props.onhandleNewTodo)

    const [newTodo, setNewTodo] = useState({});
    const {title, desc} = newTodo;

    const handleChange = (e) => {
        const fieldName = e.target.name;
        setNewTodo((oldTodo) => {
            return {...oldTodo, [fieldName]:e.target.value}
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onhandleNewTodo(newTodo);
        setNewTodo({title:'', desc:''});
    }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Add New Todo</h2>
        <hr />
        <div>
            <label htmlFor="title">Add Title</label> <br />
            <input type="text" id='title' name='title' onChange={handleChange} value={title}/>
        </div>
        <div>
            <label htmlFor="desc">Add Description</label> <br />
            <input type="text" id='desc' name='desc' onChange={handleChange} value={desc}/>
        </div>
        <div>
            <input type="submit" value="Add" />
        </div>
    </form>
  )
}

export default NewTodo