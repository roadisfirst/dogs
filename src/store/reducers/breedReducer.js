import * as actionTypes from '../actions/actionTypes';

const initialState = {
    breed: {},
    loading: false,
    hasErrors: false
}

const reducer = (state = initialState, action) => {

    console.log(action);
    switch(action.type){
        case actionTypes.GET_BREED:
            return {
                ...state,
                loading: true
            };
        case actionTypes.GET_BREED_SUCCESS:
            return {
                breed: action.payload,
                loading: false,
                hasErrors: false
            };
            case actionTypes.GET_BREED_FAIL:
        return {
            ...state,
            loading: false,
            hasErrors: true
        };
    }
    return state;
};

export default reducer;