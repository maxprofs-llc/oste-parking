import moment from 'moment'

//filtersReducer
const filtersDefaultState = {
    actualDate: moment().valueOf(),
    freeDates: [],
    spotOpen: false
}

export default (state = filtersDefaultState, action) => {
    switch (action.type){
        case 'SET_SPOT_OPEN':
            return {
                ...state,
                spotOpen: action.spotOpen
            }
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
            case 'GET_FREE_DATES':
                return {
                    ...state,
                    freeDates: action.freeDates
                }
        default:
            return state;
    }
}