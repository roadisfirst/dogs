import React, { Fragment } from 'react';
import classes from './Form.css';

const form = () => (
    <Fragment>
        <form className={classes.Form}>
            <input 
                className={classes.Input}
                placeholder={'Search for breeds by name'} />
            <button className={classes.Button}><img src="../../../assets/images/icons/search.svg" /></button>
        </form>
    </Fragment>
)

export default form;