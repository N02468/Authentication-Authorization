import React, { useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
   
    const [email, setEmail] = useState()    
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3000/login', {email,password})
      .then(result=> {
        console.log(result)
        if(result.data === "Success") {
                navigate('home')
        }
        navigate('/home')
    })
      .catch(err=> console.log(err))
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
       <h2 style={{"font-weight":'bolder',"font-family":"Comic-Neue,cursive"}}>Login</h2>
       <form onSubmit={handleSubmit}>
       
        <div className='mb-3'>
         <label htmlFor="email">
            <strong>Email</strong>
         </label>
         <input type="email" 
         placeholder='Enter your Email'
         autoComplete='off'
         name='email'
         className='form-control rounded-0'
         onChange={(e) => setEmail(e.target.value)}
         />
        </div>
        <div className='mb-3'>
         <label htmlFor="Password">
            <strong>Password</strong>
         </label>
         <input type="password" 
         placeholder='Enter your Password'
         className='form-control rounded-0'
         onChange={(e) => setPassword(e.target.value)}
         />
        </div>
        <button type="submit" className='btn btn-success w-100 rounded-0'>Register</button>
        </form>
        <p>Already Have an Account</p>
        <Link to='/Login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
            Login
        </Link>
    
      </div>
    </div>
  )
}