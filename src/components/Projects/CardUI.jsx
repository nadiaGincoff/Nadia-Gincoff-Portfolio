import React from 'react';
import './card-style.css'
import GitHubIcon from "../../img/icon-github2.png"
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
                    <a href='{props.hrefGitHub}' target='_blank' rel='noopener noreferrer'><img src={GitHubIcon} alt='icon-github' className='icon'></img></a>
                    <a href='{props.showMore}' target='_blank' rel='noopener noreferrer'><img src={GitHubIcon} alt='icon-github' className='icon'></img></a>
                </div>
            </div> 
        </div>
    )
}

export default Card;
