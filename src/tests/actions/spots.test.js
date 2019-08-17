import {ownSpot, releaseSpot, giveSpot, rejectSpot, takeSpot, cancelSpot} from '../../actions/spots'

test('Should set owner of parking spot', () => {
    const owner = 'Maddin'
    const number = 9
    const action = ownSpot({owner, number})
    expect(action).toEqual({
    type: 'OWN_SPOT',
    number,
    owner
    })
})

test('should release parking spot', () => {
    const number = 10
    const action = releaseSpot(number)
    expect(action).toEqual({
        type: 'RELEASE_SPOT',
        number
    })
})

test('should give parking spot', () => {
    const number = 9 
    const freeOn  = 1234
    const action = giveSpot({number, freeOn})
    expect(action).toEqual({
        type: 'GIVE_SPOT',
        number,
        freeOn
    })
})

test('should occupy parking spot', () => {
    const number = 9
    const takenOn  = 1234
    const takenBy = 'Denise'
    const action = takeSpot({number, takenOn, takenBy} )
    expect(action).toEqual({
        type: 'TAKE_SPOT',
        number,
        takenOn,
        takenBy
    })
})

test('should give occupied parking spot back', () => {
    const number = 9
    const takenOn  = 1234
    const takenBy = 'Denise'
    const action = rejectSpot({number, takenOn, takenBy} )
    expect(action).toEqual({
        type: 'REJECT_SPOT',
        number,
        takenOn,
        takenBy
    })
})

test('should cancel free parking spot ', () => {
    const number = 9 
    const freeOn  = 1234
    const action = cancelSpot({number, freeOn} )
    expect(action).toEqual({
        type: 'CANCEL_SPOT',
        number,
        freeOn
    })
})