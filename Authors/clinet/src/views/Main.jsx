
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Delete from '../components/Delete';
import Update from './Update';




const Main = () => {
    const [authors,setAuthers]=useState([]);
    const removeAuthor = (id) => {
      console.log(id);
  
      setAuthers(authors.filter(author => author._id !== id));
    };
  


useEffect(()=>{
    axios.get('http://localhost:8000/api/Author')
    .then(res=>{ setAuthers(res.data);})
    .catch(err =>console.log(err))
},[]);




  return (
    
    
    <div>
        <h1> Favorite authors </h1>
        <Link to="/new"> Add an author</Link>
        
        <h3> we have quotes by :</h3>
        <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions available</th>
          </tr>
        </thead>
        <tbody>
        {authors.map((author, idx) => {
            return (
              <tr>
              <td>{author.name}</td>
              <td>
                <Link to = {'/edit/'+author._id}>Edit</Link>
                <Delete successCallback={id=>{removeAuthor(id)}} autherId={author._id}/>
              </td>
            </tr>
              );
        }
      )}
        </tbody>
      </table>

    </div>
  )
}

export default Main;