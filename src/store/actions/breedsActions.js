import * as actionTypes from './actionTypes';
import axios from '../../axios-breeds';

export const getBreeds = () => ({
    type: actionTypes.GET_BREEDS
})

export const getBreedsSuccess = (breeds) => ({
    type: actionTypes.GET_BREEDS_SUCCESS,
    payload: breeds,
})

export const getBreedsFail = () => ({
    type: actionTypes.GET_BREEDS_FAIL
})

export function fetchBreeds() {
    return async (dispatch) => {
        dispatch(getBreeds())
        try {
            const response = await axios.get('https://api.thedogapi.com/v1/breeds', {
                        headers: {
                            'x-api-key': 'ea813eea-67f0-44d1-b617-28a0b6323e7e'
                        }
                    })
                    console.log(response);

            dispatch(getBreedsSuccess(response.data));
        } catch (error) {
            dispatch(getBreedsFail());
        }
    }
}