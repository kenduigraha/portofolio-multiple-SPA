import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './index.css';
// import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store';
// import routes from './routes'

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


ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/credit" component={Credit}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
