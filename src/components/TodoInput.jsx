import React from "react"

const TodoInput = ({addTodo})=>{
    const [value,setValue] = React.useState("")
    const handleChange = (e)=>{
        setValue(e.target.value)
    }
    const addData = ()=>{
        addTodo(value)
        setValue("")
    }

    return(
        <div>
            <input type="text" placeholder="Add a To-Do" onChange={handleChange} value = {value} />
            <button onClick={addData}>Save</button>
        </div>
    )
}

export {TodoInput}