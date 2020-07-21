import React from 'react'
import Photo from "../img/portfolio-photo-test-large.png"
import GitHubIcon from "../img/icon-github.png"
import LinkedinIcon from "../img/icon-ldin.png"
import './Home.css'
import Footer from './Footer'
import Header from './Header'

const homeDescriptionStyles = {
    fontFamily: '"Montserrat", sans-serif',
    marginTop: '20vh',
}

const h5Styles = {
    fontSize: '25px',
    paddingLeft: '10px'
}

const h1Styles = {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '100px',
    fontWeight: 'bold',
}

const containerIcon = {
    display: 'flex',
    justifyContent: 'spaceAround',
}

const icon = {
    width: '40px',
    paddingLeft: '10px'
}

const iconSeparation = {
    width: '40px',
    paddingLeft: '10px'
}


const PortfolioPhoto = () => {
    return (
        <div className='containerPhoto'>
            <img src={Photo} />
        </div>
    )
}


const HomeDescription = () => {
    return (
        <div>
            <div style={ homeDescriptionStyles}>
                <span style={ h5Styles}>Hello World!, I'm Nadia Gincoff.</span>
                <br />
                <span style={ h1Styles }>Front-end</span>
                <br />
                <span style={ h1Styles }>Developer</span>
            </div>
             <div style={containerIcon}>
                <a href='https://github.com/nadiaGincoff' target='_blank'><img src={GitHubIcon} style={icon}></img></a>
                <a href='https://www.linkedin.com/in/nadia-ginc/' target='_blank'><img src={LinkedinIcon} style={iconSeparation}></img></a>
             </div>
        </div>
    )
}

const Home = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='containerDescription'>
                <HomeDescription />
                <PortfolioPhoto />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;