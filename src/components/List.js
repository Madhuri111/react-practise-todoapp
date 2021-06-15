import React,{useState} from 'react'
import Form from './Form'
import './../App.css'

function List() {

    const [todos,setTodos]=useState([]) //empty array

    const addTodo = task =>{
        const newtask=[task,...todos]

        setTodos(newtask);
        console.log(newtask)
    }
    return (
        <div className="card">
            <h1>Plans for today</h1>
            <Form onSubmit={addTodo}/>

            {todos.map((todo,index) => (
                <div className="todo-list">{todo.text} </div>
            ))}
        </div>
    )
}

export default List
