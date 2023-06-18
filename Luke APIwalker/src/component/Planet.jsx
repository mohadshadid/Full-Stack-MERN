import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Planet = () => {
const[responseData,setResponseData]=useState({});
const {id} =useParams();
useEffect(()=>{
    axios.get(`https://swapi.dev/api/planets/${id}`)
         .then(response=>{setResponseData(response.data)})
    }, []); 



  return (
    <div>
      <h2>Name :{responseData.name}</h2>
      <h3>rotation_period{responseData.rotation_period}</h3>
      <h3>orbital_period{responseData.orbital_period}</h3>
      <h3>Skin Color{responseData.skin_color}</h3>
    </div>
  )
}

export default Planet

