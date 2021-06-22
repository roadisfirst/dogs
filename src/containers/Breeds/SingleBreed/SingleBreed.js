import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../../axios-breeds';
import * as actions from '../../../store/actions/index';

import classes from './SingleBreed.css';

const SingleBreed = ({
    match,
    dispatch,
    breed,
    hasErrors,
    loading
}) => {
    useEffect(() => {
        const { id } = match.params
    
        dispatch(actions.fetchBreed(id))
      }, [dispatch, match]);

    const renderBreed = () => {
        console.log(breed);
        if (loading.breed) return <p>Loading breed...</p>
        if (hasErrors.breed) return <p>Unable to display breed.</p>
        
        const imageUrl = `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`;
        // const height = breed.height.metric;
        // const weight = breed.weight.metric;

        return (
            <div className={classes.SingleBreed}>
                <div>{breed.id}</div>
                <img className={classes.BreedImg} src={imageUrl} alt={`${breed.name}`}/>
                <div className={classes.About}>
                    <h2 className={classes.BreedTitle}>{breed.name}</h2>
                    <h3 className={classes.BreedPurpose}>{breed.bred_for}</h3>
                    <div className={classes.AboutWrapper}>
                        <div className={classes.AboutItem}>
                            
                            <p><b>Temperament: </b>{breed.temperament}</p>
                        </div>
                        <div className={classes.AboutItem}>
                            {/* <p><b>Height: </b>{height} cm at the withers</p>
                            <p><b>Weight: </b>{weight} kg</p> */}
                            <p><b>Life span: </b>{breed.life_span}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="SingleBreed">
            {renderBreed()}
        </div>
    );
}

const mapStateToProps = state => ({
  breed: state.breed.breed,
  loading: state.breed.loading,
  hasErrors: state.breed.hasErrors
})

export default connect(mapStateToProps)(withErrorHandler(SingleBreed, axios));