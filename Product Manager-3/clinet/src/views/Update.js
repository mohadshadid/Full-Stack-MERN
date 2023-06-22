import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Update = () => {
    const {id}=useParams();
    
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const[loaded,setLoaded]=useState(false);
    
    useEffect(()=>{
     axios.get("http://localhost:8000/api/people/"+id)   
     .then(res=>{setTitle(res.data.title);setPrice(res.data.price);setDescription(res.data.description);setLoaded(true);console.log(res.data)})
     .catch(err=>console.log(err))
    },[])
    
  const onSubmitHandler=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:8000/api/people/"+id+"/edit",{title,price,description}) 
    .then(res=>console.log(res))
     .catch(err=>console.log(err)) 
  }
  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Titel</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={loaded && title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={ loaded && price}/>
            </p>
            <p>
                <label>description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={loaded && description}/>
            </p>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Update