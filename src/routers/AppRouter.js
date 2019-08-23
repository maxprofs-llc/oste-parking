import React from 'react';
import {Router, Route, Switch, Link} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Floor from '../components/Floor'
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import SigIn from '../components/SignIn'
import PrivateRoute from './PrivateRoute'

export const history = createBrowserHistory()           //can call anywhere in app

const AppRouter = () => (
    <Router history={history}>              
        <div>
        <Switch>
            <Route path='/' exact={true} component={SigIn} />
            <PrivateRoute path='/u1' component={Floor} />
            <PrivateRoute path='/u2' component={Floor} />
            <Route path='/help' component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
        </div>
    </Router>
)

export default AppRouter