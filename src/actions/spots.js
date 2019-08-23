import database from '../firebase/firebase'

//own spot
export const ownSpot = ({owner = '', id} = {}) => ({
    type: 'OWN_SPOT',
    id,
    owner
})

export const startOwnSpot = ({id, owner} = {}) => {
    return (dispatch) => {
        dispatch(ownSpot({id,owner}))
        return database.ref(`spots/${id}/owner`).set(owner)
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
       return database.ref('spots').once('value').then((snapshot) => {
        const spots = []
            snapshot.forEach((child) => {
                spots.push({
                    id: child.key,
                    owner: child.val().owner,
                    number: child.val().number,
                    freeOn: Object.values(child.val().freeOn), 
                })
            })
            dispatch(getSpots(spots))
        })
    }
}