import React from 'react'
import Button from './UI/Button'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <nav className='navbar container pt-3 pb-3 align-items-start'>
        <Link to='/' className='navbar-brand text-light'>Stock Prediction Portal</Link>

        <div>
            <Button text="login" href="/login"/>
            &nbsp;
            <Button text="register" href="/register" />

        </div>
    </nav>
    </>
  )
}

export default Header