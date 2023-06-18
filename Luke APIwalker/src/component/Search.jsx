import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [type,setType]=useState("people");
    const[id,setID]=useState("1");
    const navigate =useNavigate();
    const databack =(f)=>{
            f.preventDefault();
     navigate(`/${type}/${id}`); 
    }
  return (
    <div>
      <form  onSubmit={databack}>
        <select name="" id="" onChange={(f)=>setType(f.target.value)}>
            <option value="people">People</option>
            <option value="planets">Planet</option>
        </select>
        <label htmlFor="">ID</label>
        <input type="number" onChange={(f)=>setID(f.target.value)} />
        <button>search</button>
      </form>
    </div>
  )
}
export default Search
