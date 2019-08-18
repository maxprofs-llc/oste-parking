import moment from 'moment'

//filtersReducer
const filtersDefaultState = {
    actualDate: moment(),
    freeDates: [],
    takenDates: []
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
            case 'CANCEL_SPOT':
                const cancelIndex = state.freeDates.findIndex((freeOn) => JSON.stringify(freeOn) === JSON.stringify(action.freeOn))
                if(cancelIndex > -1){
                state.freeDates.splice(cancelIndex,1)
                }
                return {
                    ...state,
                    freeDates: [...state.freeDates]
                }
            case 'TAKE_SPOT':
                return {
                    ...state,
                    takenDates: [...state.takenDates, action.takenOn]
                }
            case 'REJECT_SPOT':
                const rejectIndex = state.takenDates.findIndex((takenOn) => JSON.stringify(takenOn) === JSON.stringify(action.takenOn))
                if(rejectIndex > -1){
                state.takenDates.splice(rejectIndex,1)
                }
                return {
                    ...state,
                    takenDates: [...state.takenDates]
                }
        default:
            return state;
    }
}