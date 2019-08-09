import {combineReducers, createStore} from 'redux'
import spotsReducer from '../reducers/spots'
import filtersReducer from '../reducers/filters'

export default () => {
    //Store creation
    const store = createStore( 
        combineReducers({
            spots: spotsReducer,
            filters: filtersReducer
        })
        ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store
}

