import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter, {history} from './routers/AppRouter'
import configureStore from './store/configureStore'
import {startGetSpots} from './actions/spots'
import {startGetFreeDates} from './actions/filters'
import {login, logout} from './actions/auth'
import {auth} from  './firebase/firebase'
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'


const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

let hasRendered = false
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

auth.onAuthStateChanged(user => {
    if(user){
        store.dispatch(login(user.uid))
        store.dispatch(startGetSpots())
        .then(store.dispatch(startGetFreeDates()).then(() => {
        renderApp()
        if (history.location.pathname === '/') {
            history.push('u1')
        }
        }
        )) 
    }
    else{
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})