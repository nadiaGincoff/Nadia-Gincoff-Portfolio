import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/HomeLogo.png'

const logoStyle = {
    width: '80px',
    borderBottom: '2px solid white'
}

const GoHomeButton = () => {
    return (
            <Link to='/'>
                <div>
                    <img src={logo} style={logoStyle} alt='Logo NG'/>
                </div>
            </Link>
    )
}

export default GoHomeButton;