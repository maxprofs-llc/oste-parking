import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Floor from '../components/Floor'
import WelcomePage from '../components/WelcomePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import EditSpot from '../components/EditSpot';
import DatePicker from '../components/DatePicker'

const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header/>
        <Switch>
            <Route path='/' exact={true} component={WelcomePage} />
            <Route path='/u1' component={Floor} />
            <Route path='/u2' component={Floor} />
            <Route path='/:spot' component={EditSpot} />
            <Route path='/help' component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
        <DatePicker/>
        </div>
    </BrowserRouter>
)

export default AppRouter