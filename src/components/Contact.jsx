import React from 'react';
import Header from './Header';
import './contact.css'
import GitHubIcon from "../img/icon-github2.png"
import LinkedinIcon from "../img/icon-ldin2.png"
import EmailIcon from "../img/email.png"

const Title = () => {
    return(
        <div className='containerInfo'>
            <h1 className='titleDescription'>Sigamos en contacto!</h1>
        </div>
    )
}

const ContactInformation = () => {
    return(
        <div>
            <div >
                <p className='description' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit sint voluptates placeat nesciunt, error repellat aperiam architecto harum nisi laudantium dolorum, ex, quo id tempore? Numquam, veritatis! Maxime, in porro.</p>
            </div>
            <div className='containerIconContact'>
                <a href='https://github.com/nadiaGincoff' target='_blank' rel='noopener noreferrer'><img src={GitHubIcon} alt='icon-github' className='icon'></img></a>
                <a href='https://www.linkedin.com/in/nadia-ginc/' target='_blank' rel='noopener noreferrer'><img src={LinkedinIcon} alt='icon-lkdinL.{}65' className='iconSeparation'></img></a>
                <a href='mailto:nadia.gincoff@gmail.com' target='_blank' rel='noopener noreferrer'><img src={EmailIcon} alt='icon-email.{}65' className='iconSeparation'></img></a>
             </div>
        </div>
    )
}

const Contact = () => {
    return(
        <div>
            <div>
                <Header />
            </div>
            <div className='container'>
                <div className='containerLeft'>
                </div>
                <div className="containerRight">
                    <Title />
                    <ContactInformation />
                </div> 
            </div>         
        </div>
    )
}

export default Contact;