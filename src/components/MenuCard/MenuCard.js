import React, { Fragment } from 'react';

import vote from '../../assets/images/vote-table.png';
import breeds from '../../assets/images/pet-breeds.png';
import search from '../../assets/images/images-search.png';

import classes from './MenuCard.css';
import { NavLink } from 'react-router-dom';

const menuImgs = {
    'vote-table': vote,
    'pet-breeds': breeds,
    'images-search': search
}

const menuCard = (props) => {
    let imgClass;
    switch (props.type){
        case 'vote-table': 
            imgClass = 'Vote'; 
            break;
        case 'pet-breeds': 
            imgClass = 'Breeds'; 
            break;
        case 'images-search': 
            imgClass = 'Search'; 
            break;
        default:
            imgClass = null;
    }
    return (
        <div className={classes.MenuCard}>
            <div className={classes[imgClass]}>
                <img src={menuImgs[props.type]} alt={props.type}/>
            </div>
            <NavLink 
                to={'/' + props.type} 
                className={classes.Button}
                activeClassName={classes.ButtonActive}>
            {/* <button>{props.buttonTitle}</button> */}
            {props.buttonTitle}
            </NavLink>
        </div>
    )
};

export default menuCard;