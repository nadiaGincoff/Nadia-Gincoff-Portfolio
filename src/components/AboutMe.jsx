import React from 'react' 
import Header from './Header'
import Footer from './Footer'
import Skills from './Skills'

const aboutContainer = {
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '7%',
    lineHeight: '1.6',
    fontFamily: 'Montserrat',
}

const aboutTitleDescription = {
    width: '65%',
    fontWeight: '600',
}

const aboutDescription = {
    display: 'block',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    fontSize: '20px'
}

const DescriptionAboutMe = () => {
    return (
        <div style={aboutContainer}>
            <h1 style={aboutTitleDescription}>About me</h1>
            <p style={aboutDescription}>
                Hola mundo!, Soy Nadia Gincoff y mi objetivo como desarrolladora web, es hacer diseños creativos y tecnológicamente avanzados.<br/>Con un enfoque de alta motivación, busco conseguir resultados dentro del sector tecnológico.
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
            <div style={aboutContainer}>
                <Skills />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default AboutMe
