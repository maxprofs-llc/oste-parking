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
export const takeSpotBack = ({number, freeOn} = {}) => ({
    type: 'TAKE_SPOT_BACK',
    number,
    freeOn
})
//take spot
export const takeSpot = ({number, takenOn, takenBy = ''} = {}) => ({
    type: 'TAKE_SPOT',
    number,
    takenOn,
    takenBy
})
//giveSpotBack
export const giveSpotBack = ({number, takenOn, takenBy = ''} = {}) => ({
    type: 'GIVE_SPOT_BACK',
    number,
    takenOn,
    takenBy
})