import React, { useState }from 'react'
import { Link } from 'react-router-dom'
import Icon from '../img/menu-icon.png'
import Modal from 'react-modal'
import './NavigationBar.css'
import Fade from 'react-reveal/Fade';

const iconStyle = {
    // position: 'fixed',
    width: '50px',
}

const buttonStyle = {
        
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.75)'
         }
//         content: {
//           position: 'absolute',
//           top: '40px',
//           left: '40px',
//           right: '40px',
//           bottom: '40px',
//           border: '1px solid #ccc',
//           background: '#fff',
//           overflow: 'auto',
//           WebkitOverflowScrolling: 'touch',
//           outline: 'none',
//           padding: '20px'
//         }
// }

Modal.setAppElement('#root')

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <div style={buttonStyle}>
                <img src={Icon} style={iconStyle} onClick={() => setIsMenuOpen(true)}/>
            </div>

            <Modal 
                isOpen={isMenuOpen} 
                onRequestClose={() => setIsMenuOpen(false)} 
                // style={modalStyle}
                closeTimeoutMS={ 2000 }
            >
                <div>
                    <button onClick={() => setIsMenuOpen(false)}>Close</button></div>
                    <Fade right cascade>
                        <div className='modalContent'>
                            <Link to='/' style={{ textDecoration: 'none' }} >
                               <p className='modalItem'>HOME</p>
                            </Link>
                            <Link to='/about' style={{ textDecoration: 'none' }} >
                               <p className='modalItem'>ABOUT</p>
                            </Link>
                            <Link to='/proyects' style={{ textDecoration: 'none' }} >
                                <p className='modalItem'>PROYECTS</p>
                            </Link>   
                            <Link to='/contact' style={{ textDecoration: 'none' }} >
                                <p className='modalItem'>CONTACT</p>
                            </Link>
                                
                        </div>
                    </Fade>
                </Modal>
        </div>
    )
}

export default NavigationBar

