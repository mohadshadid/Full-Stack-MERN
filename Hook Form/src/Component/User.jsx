import { useState } from "react"



const User = (props) => {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')

    const [firstNameerorr,setFirstNamerorr]=useState('')

    const handeluser =(e)=>{
        e.preventDefault();
        const newUser={firstName,lastName,email,password,confirmPassword};
    }
   const handelFirstNamerorr = (e)=>{
    setFirstName(e.target.value)
    if (e.target.value.length <1){
        setFirstNamerorr("first name is required");
        setFirstName('')
    }

    else if (e.target.value.length <5){
        setFirstNamerorr("first name is must be at least 5 characters");
        setFirstName('')
    }else{  
        setFirstNamerorr("");
    }
   }
   

  return (
    <div className="App">  
    <div>
      <p>First Name:<input type="text" onChange={handelFirstNamerorr}/>
      <p style={{color:'red'}}>{firstNameerorr}</p>
      </p>
    <p>Last Name:<input type="text" onChange={e=>setLastName(e.target.value)}/></p>
    <p>Email:<input type="text" onChange={e=>setEmail(e.target.value)}/></p>
    <p>Password:<input type="text" onChange={e=>setPassword(e.target.value)}/></p>
    <p>Confirm Password:<input type="text" onChange={e=>setConfirmPassword(e.target.value)}/></p>
    </div>
    <div>
        <h2>Your Form Data</h2>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{email}</p>
        <p>{password}</p>
        <p>{confirmPassword}</p>
    </div>
    </div>
  )
}

export default User