import * as actionTypes from '../actions/actionTypes';

const initialState = {
    breeds: [],
    loading: false,
    hasErrors: false
}

const reducer = (state = initialState, action) => {

    console.log(action);
    switch(action.type){
        case actionTypes.GET_BREEDS:
            return {
                ...state,
                loading: true
            };
        case actionTypes.GET_BREEDS_SUCCESS:
            return {
                breeds: action.payload,
                loading: false,
                hasErrors: false
            };
            case actionTypes.GET_BREEDS_FAIL:
        return {
            ...state,
            loading: false,
            hasErrors: true
        };
    }
    return state;
};

export default reducer;