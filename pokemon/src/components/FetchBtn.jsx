import React, { useState } from 'react';
import Poc from './Poc';

function FetchBtn(props) {
  const [pokemons, SetPokemons] = useState([]);
  
  const getPokemons = () =>  {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(response => {SetPokemons(response.results); console.log(response.results);}) 
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