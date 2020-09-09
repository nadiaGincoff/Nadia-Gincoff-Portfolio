import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import Card from './Cards';
import Rotate from 'react-reveal/Rotate';

const Title = () => {
    return(
        <div className='containerTitle'>
            <h1 className='projectTitle'>Proyectos</h1>
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