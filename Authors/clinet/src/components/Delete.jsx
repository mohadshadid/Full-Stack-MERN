import React from 'react'
import Axios from 'axios'

const Delete = (props) => {

  const { autherId, successCallback } = props;
  const deleteAuther = e => {
    
    Axios.delete('http://localhost:8000/api/Author/' + autherId)
      .then(res=>{
        successCallback(autherId);
      })
      .catch(err=>console.log(err))
  }

  return (
    <button onClick={deleteAuther}>
        Delete
    </button>
  )
}

export default Delete