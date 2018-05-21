import { createStore, compose, applyMiddleware } from 'redux';
import ReduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';


export default () => {
    const logger = ReduxLogger;
    const enhancer = compose(applyMiddleware(ReduxThunk, logger));
    const store = createStore(
        rootReducer,
        enhancer
    );
    return store;
};