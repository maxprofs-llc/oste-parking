import moment from 'moment'

//spotsReducer
const spotsDefaultState = []

for(let i=1; i <= 10; i++){
    spotsDefaultState.push({
        number: i,
        owner: '',
        freeOn: [],
        taken: [
            // takenBy: '',
            // takenOn: 0
        ]
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
        case 'TAKE_SPOT_BACK':
                return state.map((spot) => {
                    if (spot.number === action.number){
                        return {
                            ...spot,
                            freeOn: spot.freeOn.filter((freeOn) => freeOn !== action.freeOn)
                        }
                    } else {
                        return spot
                    }
                })
                case 'GIVE_SPOT_BACK':
                        return state.map((spot) => {
                            if (spot.number === action.number){
                                return {
                                    ...spot,
                                    taken: spot.taken.filter(({takenOn}) => takenOn !== action.takenOn)
                                }
                            } else {
                                return spot
                            }
                        })
        default:
            return state;
    }
}