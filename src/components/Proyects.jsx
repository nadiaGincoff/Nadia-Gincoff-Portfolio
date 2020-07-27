import React from 'react'
import Footer from './Footer'
import Header from './Header'
import {
    Card, CardText, CardBody, CardLink,
    CardTitle,
} from 'reactstrap';
import BurgerQueen from '../img/burgerqueen.png'


const container = {
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '3%',
    lineHeight: '1.6',
    fontFamily: 'Montserrat',
}

const titleDescription = {
    width: '65%',
    fontWeight: '600',
}

const Title = () => {
    return(
        <div style={container}>
            <h1 style={titleDescription}>Proyectos</h1>
        </div>
    )
}

const ProyectCard = () => {
    return (
      <div >
        <Card width='50px'>
          <img width="15%" src={BurgerQueen} alt="Card image cap" />
          <CardBody>
            <CardTitle>Burger Queen</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </div>
    );
};
  
const RedirectProyect = () => {
    return(
        <div>
            <div><ProyectCard></ProyectCard></div>
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