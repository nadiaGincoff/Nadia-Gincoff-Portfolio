import React from 'react';
import Card from './CardUI';
import project from '../../img/empresa.png';
import mdLinks from '../../img/mdlinks.png';
import burgerQueen from '../../img/burgerqueen2.png';
import flavors from '../../img/flavors.png';

const description = `Lorem ipsum dolor sit, amet consectetur adipisicing elit`
const markdownDescription = `Libreria instalable realizada con Node.js, que permite leer y analizar
    el estado de los links dentro de archivos tipo Markdown`
const burgerQueenDescription = `Sistema para restaurante para la toma de pedidos usando una tablet.
    Realizado en React.js`
const flavorsDescription = ` Red social para compartir recetas, realizado con
    Javascript y Firebase`

const hrefMdLinks = 'https://github.com/nadiaGincoff/SCL013-md-links';
const hrefBurgerQueen = 'https://github.com/nadiaGincoff/burguer-queen';
const hrefFlavors = 'https://github.com/nadiaGincoff/SCL013-social-network';
const hrefHootieHoo = 'https://github.com/nadiaGincoff/SCL013-HootieHoo';

const plusMdLinks = 'https://www.npmjs.com/package/ne-md-links';
const plusBurgerQueen = 'https://project-burguer-queen.web.app';
const plusFlavors = 'https://nadiagincoff.github.io/SCL013-social-network/src/index.html';
const plusHootieHoo = 'https://ganemosle-al-virus.web.app/';

const Cards = () => {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-3">
                    <Card img={project} title={`Ganemosle al virus`} description={description} github={hrefHootieHoo} plus={plusHootieHoo}/>
                </div>
                <div className="col-md-3">
                    <Card img={mdLinks} title={`Markdown-Links`} description={markdownDescription} github={hrefMdLinks} plus={plusMdLinks}/>
                </div>
                <div className="col-md-3">
                    <Card img={burgerQueen} title={`Burger Queen`} description={burgerQueenDescription} github={hrefBurgerQueen} plus={plusBurgerQueen}/>
                </div>
                <div className="col-md-3">
                    <Card img={flavors} title={`Flavors`} description={flavorsDescription} github={hrefFlavors} plus={plusFlavors}/>
                </div>
            </div>
        </div>
    );
};

export default Cards