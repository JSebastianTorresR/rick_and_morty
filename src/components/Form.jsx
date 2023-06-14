import React from 'react'
import { useState } from 'react'

function Form() {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({})
    const handleChange = (event) =>{
       setUserData({
        ...userData,
        [event.target.name]: event.target.value
       })
    }
    const handleSubmit = (evento) => {
        evento.preventDefault()
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input name='email' type="text" placeholder='email' value={userData.email} onChange={handleChange}/>
            <label>Password</label>
            <input name="password" type="password" placeholder='password' value={userData.password} onChange={handleChange}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form
