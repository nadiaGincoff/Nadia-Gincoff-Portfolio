import React from 'react';
import Zoom from 'react-reveal/Zoom';

const footerContainerStyle = {
    marginLeft: '5vh',
    marginRight: '5vh',
    borderTop: '2px solid white',
    paddingTop: '5vh',

}

const childContainerStyle = {
    fontFamily: '"Montserrat", sans-serif',
    color: 'white',
    inline: 'none',
    fontSize: '20px',
    marginBottom: '5vh'
}

const Footer = () => {
    return ( 
        <div style={ footerContainerStyle }>
            <Zoom>
                <div style={ childContainerStyle }><span>nadia.gincoff@gmail.com</span></div>
            </Zoom>
        </div>
    );
}
 
export default Footer;