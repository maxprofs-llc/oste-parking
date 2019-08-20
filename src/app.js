import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {giveSpot, ownSpot} from './actions/spots'
import {setStartDate, setEndDate} from './actions/filters'
import getFreeSpots from './selectors/spots'
import moment from 'moment'
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'


const store = configureStore()


const state = store.getState()


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
 
ReactDOM.render(jsx, document.getElementById('app'));