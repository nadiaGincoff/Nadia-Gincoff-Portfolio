import React from 'react';
import Zoom from 'react-reveal/Zoom';
import './Footer.css'


const Footer = () => {
    const email = 'nadia.gincoff@gmail.com';

    return ( 
        <div className='footerContainerStyle'>
            <Zoom>
                <div className='childContainerStyle'>
                    <span className='span'>{email}</span>
                </div>
            </Zoom>
        </div>
    );
}
 
export default Footer;