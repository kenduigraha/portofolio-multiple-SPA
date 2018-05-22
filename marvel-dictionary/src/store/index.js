import { createStore, applyMiddleware } from 'redux';
import ReduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import rootReducer from '../reducers';

const enhancer = composeWithDevTools(applyMiddleware(ReduxThunk, ReduxLogger));
const store = createStore(
    rootReducer,
    enhancer
);

export default () => store;