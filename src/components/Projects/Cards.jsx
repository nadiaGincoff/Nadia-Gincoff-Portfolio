import React from 'react';
import Card from './CardUI';
import project from '../../img/empresa.png';
import mdLinks from '../../img/mdlinks.png';
import burgerQueen from '../../img/burgerqueen2.png';
import flavors from '../../img/flavors.png';

const description = `Lorem ipsum dolor sit, amet consectetur adipisicing elit`
const markdownDescription = `Libreria realizada con Node.js, que lee y analiza
el estado de los links dentro de archivos tipo Markdown`
const burgerQueenDescription = `Sistema para restaurante para la toma de pedidos usando una tablet.
Realizado en React.js`
const flavorsDescription = ` Red social para compartir recetas, realizado con
Javascript y Firebase`

const Cards = () => {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-3">
                    <Card img={project} title={`Proyecto Empresa`} description={description} />
                </div>
                <div className="col-md-3">
                    <Card img={mdLinks} title={`Markdown-Links`} description={markdownDescription} />
                </div>
                <div className="col-md-3">
                    <Card img={burgerQueen} title={`Burger Queen`} description={burgerQueenDescription} />
                </div>
                <div className="col-md-3">
                    <Card img={flavors} title={`Flavors`} description={flavorsDescription} />
                </div>
            </div>
        </div>
    );
};

export default Cards