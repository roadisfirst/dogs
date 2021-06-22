import React from 'react';

import Form from '../UI/Form/Form';
import Button from '../UI/Button/Button';
import * as Assets from '../../assets/images/index';

import classes from './Dashboard.css';

const altName = (string) => {
    return string.split('/')[3].split('.')[0];
}

const search = () => {
    return (
        <div className={classes.Search}>
            <Form />
            <div className={classes.Buttons}>
                <Button className={classes.SearchButton} >
                    <img src={Assets.icons.liked.default}  alt={altName(Assets.icons.liked.default)} className={classes.SearchButtonImg}/>
                    </Button>
                <Button className={classes.SearchButton} >
                    <img src={Assets.icons.favourite.default} alt={altName(Assets.icons.favourite.default)} className={classes.SearchButtonImg} />
                </Button>
                <Button className={classes.SearchButton} >
                    <img src={Assets.icons.disliked.default} alt={altName(Assets.icons.disliked.default)} className={classes.SearchButtonImg}/>
                </Button>
            </div>
            
        </div>
    )
    
};

export default search;