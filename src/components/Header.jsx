import React from 'react'
import GoHomeButton from './GoHomeButton'
import NavigationBar from './NavigationBar'
import './Header.css'

const Header = () => {
    return (
        <div className='containerHeader'>
            <GoHomeButton></GoHomeButton>
            <NavigationBar></NavigationBar>
        </div>
    );
}
 
export default Header;