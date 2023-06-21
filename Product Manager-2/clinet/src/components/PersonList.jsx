import React from 'react'
import { Link } from 'react-router-dom'


const PersonList = (props) => {
  return (
    <div>
      {props.all.map((shadid, i) => (
  <p key={i}>
    <Link to ={"/add/" + shadid._id } >{shadid.title}</Link> {shadid.description} {shadid.price}
  </p>
))}

    </div>
  )
}

export default PersonList