import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import spotsReducer from '../reducers/spots'
import filtersReducer from '../reducers/filters'
import authReducer from '../reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    //Store creation
    const store = createStore( 
        combineReducers({
            spots: spotsReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk)),
    )

    return store
}

