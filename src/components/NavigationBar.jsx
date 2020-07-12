import React, {useState }from 'react'
import { Link } from 'react-router-dom'
import Icon from '../img/menu-icon.png'

const iconStyle = {
    position: 'fixed',
    width: '50px',
}

const buttonStyle = {
    marginRight: '5vh'
}

const navigationBarStyle = {
    fontSize: '50px'
}

const NavigationItems = () => {
    return (
        <div> 
            <nav style={navigationBarStyle}>
                <Link to='/about'><div>About</div></Link>
                <Link to='/proyects'><div>Proyects</div></Link>
                <Link to='/contact'><div>Contact</div></Link>
            </nav>
        </div>
    )
}

const NavigationBar = () => {
    //const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (

        <div>
            {/* <div>{isMenuOpen && < NavigationItems />}</div> */}
            <div style={buttonStyle} >
                <img src={Icon} style={iconStyle}/>
            </div>
        </div>
    )
}

export default NavigationBar