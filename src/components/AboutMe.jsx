import React from 'react' 
import Header from './Header'
import Footer from './Footer'
import Skills from './Skills'
import './AboutMe.css'

const DescriptionAboutMe = () => {
    return (
        <div className='aboutContainer'>
            <h1 className='aboutTitleDescription'>Acerca de mi</h1>
            <p className='aboutDescription'>
                Soy Nadia Gincoff y mi objetivo como desarrolladora web, es hacer diseños creativos y tecnológicamente avanzados.<br/>Con un enfoque de alta motivación, busco conseguir resultados dentro del sector tecnológico.
                <br />Durante mi experiencia en 'Laboratoria' he conseguido adquirir una serie de habilidades, <br></br>incluyendo la colaboración ágil y la resolución de problemas e imprevistos de manera autónoma.
            </p>
        </div>
    )
}

const AboutMe = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div><DescriptionAboutMe /></div>
            <div className='aboutContainer'>
                <Skills />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default AboutMe
