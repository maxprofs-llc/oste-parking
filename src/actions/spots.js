import database from '../firebase/firebase'

//own spot
export const ownSpot = ({owner = '', id} = {}) => ({
    type: 'OWN_SPOT',
    id,
    owner
})

export const startOwnSpot = ({id} = {}) => {
    return (dispatch, getState) => {
        const owner = getState().auth.name
        const uid = getState().auth.uid
        dispatch(ownSpot({id,owner}))
        database.ref(`spots/${id}/owner`).set(owner)
        database.ref(`spots/${id}/ownerid`).set(uid)
    }
}
//give spot
export const giveSpot = ({id, freeOn} = {}) => ({
    type: 'GIVE_SPOT',
    id,
    freeOn
})

export const startGiveSpot = ({id, freeOn} = {}) => {
    return (dispatch) => {
        dispatch(giveSpot({id,freeOn}))
        return database.ref(`spots/${id}/freeOn`).push(freeOn).then(() => {
             database.ref('freeDates').push(freeOn).then(() => {
            })
        })
    }
}

export const getSpots = (spots) => ({
    type: 'GET_SPOTS',
    spots
})

export const startGetSpots = () => {
    return (dispatch) => {
        const spotAnswer = database.ref('spots').once('value').then((snapshot) => {
        const spots = []
            snapshot.forEach((child) => {
                spots.push({
                    id: child.key,
                    owner: child.val().owner,
                    ownerid: child.val().ownerid,
                    number: child.val().number,
                    freeOn: Object.values(child.val().freeOn), 
                })
            })
            dispatch(getSpots(spots))
        })
        return spotAnswer 
    }
}