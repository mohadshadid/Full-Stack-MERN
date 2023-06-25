import React,{useState} from 'react'
import  AuthorForm  from '../components/AuthorForm'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'


const AddAuthor = () => {
    const navigate =useNavigate()
    const [errors, setErrors] = useState([]); 
    const createAuthors= name =>{
        
        axios.post(`http://localhost:8000/api/Author`,{name:name}) // Aothor from backend route
    .then(res=>{
        navigate('/')

    })
    .catch(err=>{
      const errorResponse = err.response.data.errors; // Get the errors from err.response.data
      const errorArr = []; // Define a temp error array to push the messages in
      for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message)
      }
      // Set Errors
      setErrors(errorArr);
  })            


    }

  return (
    <div>
        <Link to="/"> Home</Link>
        <h1> Add a new autheor</h1>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
        <AuthorForm formAction={createAuthors}/>
    </div>
  )
}

export default AddAuthor