import React, { useEffect, useState } from 'react'
import UserForm from '../components/UserForm'
import axios from 'axios'
import PersonList from '../components/PersonList'

const Main = () => {

  const[users,setUsers]=useState([]);
  useEffect(()=>{
  axios.get("http://localhost:8000/api/people")
  .then(res=>setUsers(res.data))  
  .catch(err=>console.log(err))
  },[])

  const removeFromDom = productId => {
    setUsers(users.filter(product => product._id !== productId));
}

  return (

    <div>
<UserForm/>
<PersonList all={users} deletefromdob={removeFromDom}/>
</div>
)
}

export default Main