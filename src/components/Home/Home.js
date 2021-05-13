import React from 'react';

import homePic from '../../assets/images/girl-and-pet.png';

import classes from './Home.css';

const home = () => (
    <div className={classes.homeContainer}>
        <img className={classes.homePic} src={homePic} alt="girl-and-pet"/>
    </div>
)

export default home;