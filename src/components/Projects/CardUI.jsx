import React from 'react';
import './card-style.css'
import GitHubIcon from "../../img/icon-github.png"
//import LinkedinIcon from "../img/icon-ldin2.png"

const Card = (props) => {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={props.img} alt="Image1" className="card-img-top"/>
            </div>
            <div className='hover-to-show'>
                <h4 className="card-title">{props.title}</h4>
                <div className="card-body text-dark">
                    <p className="card-text text-secondary">{props.description}</p>
                    <a className="buttonCard" href={props.github} target="_blank" rel="nofollow noopener">Git-Hub</a>
                    <a className="buttonCard" href={props.plus} target="_blank" rel="nofollow noopener">Ver más</a>
                </div>
            </div> 
        </div>
    )
}

export default Card;
