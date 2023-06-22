import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { useParams} from 'react-router-dom';

const Detail = () => {

    const [app,setApp]=useState();
    const[loaded,setLoaded]=useState(false);
    const{id}=useParams();
    useEffect(() =>{
     axios.get("http://localhost:8000/api/people/"+id)   
     .then(res=>{setApp(res.data);setLoaded(true)})
     .catch(err=> console.log(err))
    },[])

    return (
        <div>
        {loaded && <p>Title :{app.title}</p>}
        {loaded ? <p>Description : {app.description}</p> : <p></p>}
        {loaded ? <p>Price : {app.price}</p> : <p></p>}
        </div>
       
      )
      
}

export default Detail