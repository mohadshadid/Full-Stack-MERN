import logo from './logo.svg';
import './App.css';
import {useState} from 'react'




function App() {
  const [firstName,setFirstName]=useState()
  const [lastName,setLastName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [confirmPassword,setConfirmPassword]=useState()
  
  return (
    <div className="App">
      <p>First Name:<input type="text" onChange={e=>setFirstName(e.target.value)}/></p>
      <p>Last Name:<input type="text" onChange={e=>setLastName(e.target.value)}/></p>
      <p>Email:<input type="text" onChange={e=>setEmail(e.target.value)}/></p>
      <p>Password:<input type="text" onChange={e=>setPassword(e.target.value)}/></p>
      <p>Confirm Password:<input type="text" onChange={e=>setConfirmPassword(e.target.value)}/></p>
      <hr/>
      <h2>Your Form Data</h2>
      <p>First Name :{firstName}</p>
      <p>Last Name :{lastName}</p>
      <p>Email :{email}</p>
      <p>Password :{password}</p>
      <p>Confirm Password :{confirmPassword}</p>
    </div>
  );
}

export default App;
