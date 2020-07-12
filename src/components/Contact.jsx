import React from 'react'

const Title = () => {
    return(
        <div>
            <h1>Job with me baby oh yeah</h1>
        </div>
    )
}

const ContactInformation = () => {
    return(
        <div>
            <div><p>nadia.gincoff@gmail.com</p></div>
            <div><p>Linkedin</p></div>
            <div><p>GitHub</p></div>
        </div>
    )
}


const Contact = () => {
    return(
        <div>
            <Title />
            <ContactInformation />
        </div>
    )
}

export default Contact;