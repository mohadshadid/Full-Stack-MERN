import React, { useState } from 'react';
import Poc from './Poc';
import axios from 'axios';

const FetchBtn = ()=> {
  const [pokemons, SetPokemons] = useState([]);
  
  const getPokemons = () =>  {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(response => {SetPokemons(response.data.results); console.log(response.results);}) 
    .catch(error => console.log(error));

    
  };

  return (

    <div>
      <button onClick={getPokemons} >
        Fetch Pokemons 
      </button>
      <Poc pokemons ={pokemons}/>
    </div>


  )
}

export default FetchBtn;







