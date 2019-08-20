import database from '../firebase/firebase'

//own spot
export const ownSpot = ({owner = '', number} = {}) => ({
    type: 'OWN_SPOT',
    number,
    owner
})
//release spot
export const releaseSpot = (number) => ({
    type: 'RELEASE_SPOT',
    number
})
//give spot
export const giveSpot = ({number, freeOn} = {}) => ({
    type: 'GIVE_SPOT',
    number,
    freeOn
})
//takeSpotBack
export const cancelSpot = ({number, freeOn} = {}) => ({
    type: 'CANCEL_SPOT',
    number,
    freeOn
})
//take spot
export const takeSpot = ({number, takenOn, takenBy} = {}) => ({
    type: 'TAKE_SPOT',
    number,
    takenOn,
    takenBy
})
//giveSpotBack
export const rejectSpot = ({number, takenOn, takenBy} = {}) => ({
    type: 'REJECT_SPOT',
    number,
    takenOn,
    takenBy
})

export const getSpots = (spots) => ({
    type: 'GET_SPOTS',
    spots
})