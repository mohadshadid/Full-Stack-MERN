import React, { useState,useEffect } from 'react'
import AuthorForm from '../components/AuthorForm'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
    const {id}=useParams();
    console.log(id);
    const [author,setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 

    const navigate = useNavigate('');
    
    useEffect(() => {
        console.log(id)
        axios.get('http://localhost:8000/api/Author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));

    }, []);
        
        

    const editAuthor = author => {
        axios.put('http://localhost:8000/api/Author/' + id, { name: author })
            .then(res => navigate('/'))
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
                    {errors.map((err, index) => <p key={index}>{err}</p>)}

            {loaded && (
                <AuthorForm
                    formAction={editAuthor}
                    initialName={author.name} />
            )}
        </div>
    )
  }

export default Update