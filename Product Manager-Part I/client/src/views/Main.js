import React,{useState,useEffect} from 'react';
import Form from '../components/Form';
import axios from 'axios';
import List from '../components/List';


const Main = () => {
  const[allProduct,setAllProduct]=useState([])
  const[loaded,setLoaded]=useState(false)
  useEffect(()=>{
      axios.get('http://localhost:8000/api/projects')
      .then(res=>{
        setAllProduct(res.data);
        setLoaded(true)})
      .catch(err=>console.log(err))
  },[])

  return (
    <div>
        <Form/>
        <hr/>
        {loaded && <List allProduct={allProduct.projects}/>}
    </div>
  )
}

export default Main