import React, { useEffect } from "react"
import { TodoInput } from "./TodoInput"

const Todos = ()=>{

    const [todos,setTodos] = React.useState([])
    const [count,setCount] = React.useState(1)
    useEffect(()=>{
        fetch(`http://localhost:8080/title?_page=${count}&_limit=3`)
        .then((res)=> res.json())
        .then((data)=>{
            setTodos(data)
        })
    },[count])

    const addTodo = (newValue)=>{
        fetch("http://localhost:8080/title",{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify({
            todo: newValue,
            isCompleted:false,
            })
        })
        .then((res)=> res.json())
        .then((data)=>{
            setTodos([...todos,data])
        })
    }
    return(
        <div>Todo
        <TodoInput addTodo = {addTodo} />
        {todos.map((todo)=>(
            <div key={todo.id}>
                {todo.todo}
            </div>
        ))}

        <button onClick={()=>setCount(count-1)}>prev</button>
        <button onClick={()=>setCount(count+1)}>next</button>

        </div>
    )
}

export {Todos}