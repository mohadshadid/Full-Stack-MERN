import React,{useState} from 'react'
import axios from 'axios';

const Form = () => {
    const [title,setTitle]=useState('');
    const [price,setPrice]=useState('');
    const [desc,setDesc]=useState('');
    const handelSubmit=e=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/projects',{
        title,
        price,
        desc})
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
        

    }

  return (
    <div>
        <h2>Product Manager</h2>
        <form onSubmit={handelSubmit}>
            <p>Title <input type='text' onChange={(e)=>setTitle(e.target.value)}></input></p>
            <p>Price <input type='number' onChange={(e)=>setPrice(e.target.value)}></input></p>
            <p>Description <input type='text' onChange={(e)=>setDesc(e.target.value)}></input></p>
            <input type='submit' value="Create"></input>
        </form>
        
    </div>
  )
}

export default Form