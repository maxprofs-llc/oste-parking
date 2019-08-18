import spotsReducer from '../../reducers/spots'
import moment from 'moment'
import {spots} from '../fixtures'


test('should set owner of spot', () => {
    const action = {
        type: 'OWN_SPOT',
        number: 2,
        owner: 'Hans'
    }
    const state = spotsReducer(spots, action)
    expect(state[1].owner).toBe('Hans')
})
test('should clear owner of spot', () => {
    const action = {
        type: 'RELEASE_SPOT',
        number: 2,
    }
    const state = spotsReducer(spots, action)
    expect(state[1].owner).toBe('')
})
test('should set spot free on date', () => {
    const action = {
        type: 'GIVE_SPOT',
        number: 3,
        freeOn: moment(5000)
    }
    const state = spotsReducer(spots, action)
    expect(state[2].freeOn[1]).toEqual(moment(5000))
})
test('should set spot taken By on date', () => {
    const action = {
        type: 'TAKE_SPOT',
        number: 1,
        takenOn: moment(100),
        takenBy: 'Ralf'
    }
    const state = spotsReducer(spots, action)
    expect(state[0].taken[1]).toEqual({
        takenOn: moment(100),
        takenBy: 'Ralf'
    })
})

test('should reset spot free on date', () => {
    const action = {
        type: 'CANCEL_SPOT',
        number: 1,
        freeOn: moment(300)
    }
    const state = spotsReducer(spots, action)
    expect(state[0].freeOn[0]).toBeUndefined()
})

test('should reset spot taken on date', () => {
    const action = {
        type: 'REJECT_SPOT',
        number: 2,
        takenOn: moment(400),
        takenBy: 'Klaus'
    }
    const state = spotsReducer(spots, action)
    expect(state[1].taken[0]).toBeUndefined()
})



