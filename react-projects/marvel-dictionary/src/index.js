import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore();

const Loading = () => <div>Loading...</div>;

const App = Loadable({
    loader: () => import('./components/App'),
    loading: Loading,
});

const Credit = Loadable({
    loader: () => import('./components/Credit/Credit'),
    loading: Loading,
});

const DetailCharacter = Loadable({
    loader: () => import('./components/Layout/Content/DetailCharacter'),
    loading: Loading,
});


ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/credit" component={Credit}/>
                <Route path="/character/:id" component={DetailCharacter}/>
                {/* TODO:  404 page */}
                <Route component={App} /> 
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
