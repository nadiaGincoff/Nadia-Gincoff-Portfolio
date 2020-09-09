import React, { useState } from 'react'
import GoHomeButton from './GoHomeButton'
import NavigationBar from './NavigationBar'
import './Header.css'
import useThemeSwitcher from '../hooks/useThemeSwitcher';
 
const Header = () => {

    const themeSwitcher = useThemeSwitcher()

    return (
        <div className='containerHeader'>
            <GoHomeButton></GoHomeButton>
            {themeSwitcher}
            <NavigationBar></NavigationBar>
        </div>
    );
}
 
export default Header;