import { createStore, compose, applyMiddleware } from 'redux';
import ReduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const logger = ReduxLogger();
const enhancer = compose(applyMiddleware(ReduxThunk, logger));
const store = createStore(
    enhancer
);

export { store };