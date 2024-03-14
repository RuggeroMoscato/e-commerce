import React from 'react'
import './contact.css'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <div className='contactUs'>
<form action="get" className='contactUs_form'>
    <h1 className='Title'>Contact us</h1>
    <input type="email" placeholder='email' />
    <input type="password" placeholder='password' />
    <button className='Accedi'>
Accedi
</button>
<p>terms of service</p>
</form>

    </div>
  )
}

export default Contact;