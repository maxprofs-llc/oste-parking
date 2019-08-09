import moment from 'moment'

//filtersReducer
const filtersDefaultState = {
    actualDate: moment(),
    freeDates: []
}

export default (state = filtersDefaultState, action) => {
    switch (action.type){
        case 'SET_ACTUAL_DATE':
            return {
                ...state,
                actualDate: action.actualDate
            }
            case 'GIVE_SPOT':
                return {
                    ...state,
                    freeDates: [...state.freeDates, action.freeOn]
                }
        default:
            return state;
    }
}