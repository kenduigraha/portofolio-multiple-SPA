import { createStore, compose, applyMiddleware } from 'redux';
import ReduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

const enhancer = compose(applyMiddleware(ReduxThunk, ReduxLogger));
const store = createStore(
    rootReducer,
    enhancer
);

export default () => store;