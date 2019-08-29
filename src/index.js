import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Navigation from './components/Navigation';
import Users from './components/Users';

import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/app.css';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Route exact path='/' render={() => <Navigation><App /></Navigation>} />
        <Route path='/users' render={() => <Navigation><Users /></Navigation>} />
    </Router>,
    document.getElementById('root')
);