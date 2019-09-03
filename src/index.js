import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './components/App';
import Navigation from './components/Navigation';
import UserList from './components/users/UserList';
import UserDetail from './components/users/UserDetail';

import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/app.css';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Route exact path='/' render={() => <Navigation><App /></Navigation>} />
        <Route exact path='/users' render={() => <Navigation><UserList /></Navigation>} />
        <Route path='/users/:id' render={(props) => <Navigation><UserDetail {...props} /></Navigation>} />
    </Router>,
    document.getElementById('root')
);