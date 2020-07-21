import React from 'react'
import Footer from './Footer'
import Header from './Header'


const Title = () => {
    return(
        <div>
            <h1>Mis proyectos</h1>
        </div>
    )
}

const RedirectProyect = () => {
    return(
        <div>
            <div>Box 1</div>
            <div>Box 2</div>
            <div>Box 3</div>
            <div>Box 4</div>
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
            <RedirectProyect />
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Proyects;