import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/HomeLogo.png'

const logoStyle = {
    position: 'fixed',
    width: '100px'
}

const GoHomeButton = () => {
    return (
            <Link to='/'>
                <div>
                    <img src={logo} style={logoStyle}/>
                </div>
            </Link>
    )
}

export default GoHomeButton;