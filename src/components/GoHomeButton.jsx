import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/HomeLogo.png'
import './GoHomeButton.css'


const GoHomeButton = () => {
    return (
            <Link to='/'>
                <div>
                    <img src={logo} className='logoStyle' alt='Logo NG'/>
                </div>
            </Link>
    )
}

export default GoHomeButton;