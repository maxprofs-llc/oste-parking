import database from '../firebase/firebase'

//setActualdate
export const setActualDate = (actualDate) => ({
    type: 'SET_ACTUAL_DATE',
    actualDate
})

export const getFreeDates = (freeDates) => ({
    type: 'GET_FREE_DATES',
    freeDates
})

export const startGetFreeDates = () => {
    return (dispatch) => {
        return database.ref('freeDates').once('value').then((snapshot) => {
            dispatch(getFreeDates(Object.values(snapshot.val())))
        })
    }
}
