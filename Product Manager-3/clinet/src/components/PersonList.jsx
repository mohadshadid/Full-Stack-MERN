import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const PersonList = (props) => {
  const Deleteperson =(id)=>{
    axios.delete(`http://localhost:8000/api/people/${id}`)
    .then(res=>props.deletefromdob(id))  
    .catch(err=>console.log(err))
    
  }

  
  return (
    <div>
      {props.all.map((shadid, i) => (
  <p key={i}>
    <Link to ={"/add/" + shadid._id } >{shadid.title}</Link> {shadid.description} {shadid.price}
    <button onClick={()=>Deleteperson(shadid._id)}>Delete</button>
  </p>
))}

    </div>
  )
}

export default PersonList