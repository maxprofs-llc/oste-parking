import moment from 'moment'

//spotsReducer
const spotsDefaultState = []

for(let i=1; i <= 20; i++){
    spotsDefaultState.push({
        number: i,
        owner: '',
        freeOn: [],
        taken: []
    })
}

export default (state = spotsDefaultState, action) => {
    switch (action.type){
        case 'OWN_SPOT':
            return state.map((spot) => {
                if (spot.number === action.number){
                    return {
                        ...spot,
                        owner: action.owner
                    }
                } else {
                    return spot
                }
            })
        case 'RELEASE_SPOT':
                return state.map((spot) => {
                    if (spot.number === action.number){
                        return {
                            ...spot,
                            owner: ''
                        }
                    } else {
                        return spot
                    }
                })
        case 'GIVE_SPOT':
                return state.map((spot) => {
                    if (spot.number === action.number){
                        return {
                            ...spot,
                            freeOn: [...spot.freeOn, action.freeOn]
                        }
                    } else {
                        return spot
                    }
                })
        case 'TAKE_SPOT':
                return state.map((spot) => {
                    if (spot.number === action.number){
                        return {
                            ...spot,
                            taken: [...spot.taken, {
                                takenBy: action.takenBy,
                                takenOn: action.takenOn
                            }]
                        }
                    } else {
                        return spot
                    }
                })
        case 'CANCEL_SPOT':
                return state.map((spot) => {
                    if (spot.number === action.number){
                        return {
                            ...spot,
                            freeOn: spot.freeOn.filter((freeOn) => JSON.stringify(freeOn) !== JSON.stringify(action.freeOn))
                        }
                    } else {
                        return spot
                    }
                })
                case 'REJECT_SPOT':
                        return state.map((spot) => {
                            if (spot.number === action.number){
                                return {
                                    ...spot,
                                    taken: spot.taken.filter(({takenOn}) => JSON.stringify(takenOn) !== JSON.stringify(action.takenOn))
                                }
                            } else {
                                return spot
                            }
                        })
        default:
            return state;
    }
}