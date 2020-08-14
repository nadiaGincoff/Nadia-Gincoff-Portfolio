import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import Card from './Cards';

const container = {
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '7%',
    lineHeight: '1.6',
    fontFamily: 'Montserrat',
}

const titleDescription = {
    fontWeight: '600',
}

const Title = () => {
    return(
        <div style={container}>
            <h1 style={titleDescription}>Proyectos</h1>
        </div>
    )
}
  
const RedirectProject = () => {
    return(
        <div>
            <div><Card></Card></div>
        </div>
    )
}

const Proyects = () => {
    return(
        <div>
            <div>
                <Header />
            </div>
            <Title />
            <RedirectProject />
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Proyects;