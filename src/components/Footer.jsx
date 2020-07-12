import React from 'react';

const footerContainerStyle = {
    marginLeft: '5vh',
    marginRight: '5vh',
    borderTop: '2px solid black',
    paddingTop: '5vh',
    height: '100px'
}

const childContainerStyle = {
    fontFamily: '"Montserrat", sans-serif',
    color: 'black',
    inline: 'none',
}

const Footer = () => {
    return ( 
        <div style={ footerContainerStyle }>
            <div style={ childContainerStyle }><span>nadia.gincoff@gmail.com</span></div>
        </div>
    );
}
 
export default Footer;