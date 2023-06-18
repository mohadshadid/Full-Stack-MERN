import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Pepole = () => {
const[responseData,setResponseData]=useState({});
const {id} =useParams();
useEffect(()=>{
    axios.get(`https://swapi.dev/api/people/${id}`)
         .then(response=>{setResponseData(response.data)})
    }, []); 



  return (
    <div>
      <h2>Name :{responseData.name}</h2>
      <h3>Height{responseData.height}</h3>
      <h3>Mass{responseData.mass}</h3>
      <h3>Hair Color{responseData.hair_color}</h3>
      <h3>Skin Color{responseData.skin_color}</h3>
    </div>
  )
}

export default Pepole
