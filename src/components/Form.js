import React,{useState} from 'react'
import './../App.css'

function Form(props) {

    const [values,setValues]=useState('')
    const [count,setCount]=useState(1)
    // let count=0
    // const [task,setTask]=useState([])
    
    const handleChange = e => {
        setValues(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        // const neww=[e,...task]

        // setTask(neww)

        setCount(count+1)
        props.onSubmit ({
            index:count,
            text:values
        });

        setValues('')

        // console.log("Hello",neww)

    };

    

    return (
       <form className="todo-form" onSubmit={handleSubmit}>
           <input type="text" placeholder="add a task"  value={values} name="text" className="todo-input" onChange={handleChange}/>
           <button className="todo-button">Add ToDo</button>
       </form>


    )
}

export default Form


//rfce

