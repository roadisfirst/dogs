import React from 'react';

import classes from './BreedCard.css';

const breedCard = (props) => {
    console.log(props.image)
    return (
        <div className={classes.CardsContainer}>
            <article className={classes.BreedCard} onClick={props.clicked}>
            <h2>{props.name}</h2>
            <div className="Info">
                
                <img />
            </div>
            </article>
        </div>
    )
};

export default breedCard;