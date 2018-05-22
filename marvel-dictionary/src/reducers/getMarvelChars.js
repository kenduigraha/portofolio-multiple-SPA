import {
    LOAD_CHARACTERS_MARVEL,
    LOAD_CHARACTERS_MARVEL_SUCCESS,
    LOAD_CHARACTERS_MARVEL_FAILURE
} from '../constants';

const initialState = {
    loading: true,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOAD_CHARACTERS_MARVEL:
            return state;
        
        case LOAD_CHARACTERS_MARVEL_SUCCESS:
            return {
                loading: false,
                payload: action.payload,
            };

        case LOAD_CHARACTERS_MARVEL_FAILURE:
        default:
            return state;
    }
}