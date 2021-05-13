import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch} from 'react-redux';
import { Route } from 'react-router-dom';

import BreedCard from '../../components/BreedCard/BreedCard';
import Breed from './Breed/Breed';
import Filter from '../../components/Filter/Filter';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-breeds';
import * as actions from '../../store/actions/index';
import { render } from 'react-dom';

const Breeds = ({dispatch, loading, breeds, hasErrors}) => {
    useEffect(() => {
        dispatch(actions.fetchBreeds())
    }, [dispatch])

    const renderBreeds = () => {
        if (loading) return <p>Loading...</p>
        if (hasErrors) return <p>Unable to display breeds.</p>
        return breeds.slice(0, 4).map((breed) => 
            <BreedCard 
                key={breed.id} 
                name={breed.name}
                img={breed.image} />)
    }

    return (
        <section>
            <h2>Breeds</h2>
            <p>Breeds will be here</p>
            <Filter />
            {renderBreeds()}
        
        {/* <Route path={props.match.url + "/:id"} exact component={Breed} /> */}
        </section>
    )
}



const mapStateToProps = (state) => ({
        loading: state.breeds.loading,
        breeds: state.breeds.breeds,
        hasErrors: state.breeds.hasErrors
});

export default connect(mapStateToProps)(withErrorHandler(Breeds, axios));