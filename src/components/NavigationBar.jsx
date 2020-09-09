import React, { useState }from 'react'
import { Link } from 'react-router-dom'
import Icon from '../img/menu-icon2.png'
import CloseIcon from '../img/close-icon-white.png'
import Modal from 'react-modal'
import './NavigationBar.css'
import Fade from 'react-reveal/Fade';


Modal.setAppElement('#root')

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <div className={'buttonStyle', ''}>
                <img src={Icon} alt='icon-menu' className='iconStyle' onClick={() => setIsMenuOpen(true)}/>
            </div>
            <Modal isOpen={isMenuOpen} onRequestClose={() => setIsMenuOpen(false)} closeTimeoutMS={2000} className='modalStyle'>
                <div className='CloseButton'> 
                    <img src={CloseIcon} alt='icon-close-menu' className='iconStyle' onClick={() => setIsMenuOpen(false)}/>
                </div>
                    <Fade right cascade>
                        <div className='modalContent'>
                            <Link to='/' style={{ textDecoration: 'none' }} >
                               <p className='modalItem'>INICIO</p>
                            </Link>
                            <Link to='/about' style={{ textDecoration: 'none' }} >
                               <p className='modalItem'>SOBRE MI</p>
                            </Link>
                            <Link to='/projects' style={{ textDecoration: 'none' }} >
                                <p className='modalItem'>PROYECTOS</p>
                            </Link>   
                            <Link to='/contact' style={{ textDecoration: 'none' }} >
                                <p className='modalItem'>CONTACTO</p>
                            </Link>
                        </div>
                    </Fade>
            </Modal>
        </div>
    )
}

export default NavigationBar

