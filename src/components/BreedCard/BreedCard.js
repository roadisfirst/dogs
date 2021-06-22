import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './BreedCard.css';

const breedCard = (props) => {
    return (
        <NavLink to={props.clicked}>
            <article className={classes.BreedCard}>
                <div className={classes.Info}>
                    <img src={props.img.url} alt={props.name}/>
                    <h3>{props.name}</h3>
                </div>
            </article>
        </NavLink>
    )
};

export default breedCard;