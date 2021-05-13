import * as actionTypes from './actionTypes';
// import axios from '../../axios-breeds';

export const getBreed = () => ({
    type: actionTypes.GET_BREED
})

export const getBreedSuccess = (breed) => ({
    type: actionTypes.GET_BREED_SUCCESS,
    payload: breed,
})

export const getBreedFail = () => ({
    type: actionTypes.GET_BREED_FAIL
})

export function fetchBreed() {
    return async (dispatch) => {
        dispatch(getBreed())

        try {
            const response = await fetch('https://api.thedogapi.com/v1/breeds/${id}', {
            method: "GET",
            headers: {
                'x-api-key': 'ea813eea-67f0-44d1-b617-28a0b6323e7e'
            }
        });
            const data = await response.json();

            dispatch(getBreedSuccess(data));
        } catch (error) {
            dispatch(getBreedFail());
        }
    }
}