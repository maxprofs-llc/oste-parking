import database from '../firebase/firebase'

export const setSpotOpen = (spotOpen) => ({
    type: 'SET_SPOT_OPEN',
    spotOpen
})

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
        const filterAnswer = database.ref('freeDates').once('value').then((snapshot) => {
            dispatch(getFreeDates(Object.values(snapshot.val())))
        })
        return filterAnswer;

    }
}
