import {
    LOAD_CHARACTERS_MARVEL,
    LOAD_CHARACTERS_MARVEL_SUCCESS,
    LOAD_CHARACTERS_MARVEL_FAILURE,
    UPDATE_FLAG_INFINITY_CHARACTERS_MARVEL
} from '../constants';

const initialState = {
    loading: true,
    infinity: false,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOAD_CHARACTERS_MARVEL:
            return Object.assign({}, state, {
                loading: true
            });
        
        case LOAD_CHARACTERS_MARVEL_SUCCESS:
            return {
                loading: false,
                infinity: false,
                payload: action.payload,
            };

        case UPDATE_FLAG_INFINITY_CHARACTERS_MARVEL:
            return Object.assign({}, state, {
                infinity: action.payload.data
            });

        case LOAD_CHARACTERS_MARVEL_FAILURE:
        default:
            return state;
    }
}