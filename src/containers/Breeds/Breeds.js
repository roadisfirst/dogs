import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch} from 'react-redux';

import BreedCard from '../../components/BreedCard/BreedCard';
import Search from '../../components/Dashboard/Dashboard';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-breeds';
import * as actions from '../../store/actions/index';
import { render } from 'react-dom';

import classes from './Breeds.css';

const Breeds = ({dispatch, loading, breeds, hasErrors}) => {
    useEffect(() => {
        dispatch(actions.fetchBreeds())
    }, [dispatch])

    const renderBreeds = () => {
        if (loading) return <p>Loading...</p>
        if (hasErrors) return <p>Unable to display breeds.</p>


        return breeds.slice(0, 10).map((breed) =>

            <BreedCard 
                key={breed.id} 
                name={breed.name}
                img={breed.image}
                clicked={`/pet-breeds/${breed.id}`} />)
    }

    return (
        <section className={classes.BreedsContainer}>
            <h2>Breeds</h2>
            <Search />
            <div className={classes.CardsContainer}>
                {renderBreeds()}
            </div>
        </section>
    )
}



const mapStateToProps = (state) => ({
        loading: state.breeds.loading,
        breeds: state.breeds.breeds,
        hasErrors: state.breeds.hasErrors
});

export default connect(mapStateToProps)(withErrorHandler(Breeds, axios));