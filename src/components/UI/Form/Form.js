import React, { Fragment } from 'react';
import classes from './Form.css';

//import searchItem from '../../../assets/images/icons/search-item.png';
import * as Assets from '../../../assets/images/index';

const form = () => (
    <Fragment>
        <form className={classes.Form}>
            <input 
                className={classes.Input}
                placeholder={'Search for breeds by name'} />
            {/* <button className={classes.Button}><img src={searchItem} /></button> */}
            <button className={classes.Button}>
                <img src={Assets.icons.searchItem.default} className={classes.SearchItemImg} />
            </button>
        </form>
    </Fragment>
)

export default form;