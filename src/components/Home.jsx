import React from 'react'
import GitHubIcon from "../img/icon-github2.png"
import LinkedinIcon from "../img/icon-ldin2.png"
import './Home.css'
import Footer from './Footer'
import Header from './Header'
import { useLottie } from 'lottie-react'
import animationData from '../lotties/animation-portfolio.json'
import Rotate from 'react-reveal/Rotate';

const style = {
    height: 600,
    width: 600,
}

const AnimationPortfolio = () => {
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    
    const { View } = useLottie(defaultOptions, style)

    return View;
}
 

const HomeDescription = () => {
    return (
        <div>
              <Rotate top left cascade>
            <div className='homeDescriptionStyles'>
                <span className='h5Styles'>Hola!, soy Nadia Gincoff.</span>
                <br />
                <span className='h1Styles'>Front-end Developer</span>
                {/* <span className='h1Styles'></span> */}
            </div>
             <div className='containerIcon'>
                <a href='https://github.com/nadiaGincoff' target='_blank' rel='noopener noreferrer'><img src={GitHubIcon} alt='icon-github' className='iconGit'></img></a>
                <a href='https://www.linkedin.com/in/nadia-ginc/' target='_blank' rel='noopener noreferrer'><img src={LinkedinIcon} alt='icon-lkdin' className='iconSpace'></img></a>
             </div>
             </Rotate>
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
                         
                <div className='containerAnimation'>
                    <AnimationPortfolio />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;