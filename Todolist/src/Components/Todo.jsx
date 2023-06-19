import React ,{useState}from 'react'
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@mui/material';


const Todo = () => {
    const [todo,setTodo]=useState('')
    const [tasks,setTasks]=useState([])
    const fun1=(value)=>{
        setTodo(value);
    }
    const fun2=()=>{
        setTasks([...tasks,{todo}]);
        setTodo('');
    }
  return (
    <div>

    <input type ="Text" onChange={(e)=>fun1(e.target.value)} value = {todo}/>
    <button onClick={fun2}> Add</button>
<div>
    <ul>
    {tasks.map((item,idx)=>(
        <li key = {idx}>
            {item.todo}
        </li>

    ))}
    </ul>
</div>
    </div>
  )
}

export default Todo