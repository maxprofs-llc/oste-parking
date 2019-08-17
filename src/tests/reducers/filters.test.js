import filtersReducer from '../../reducers/filters'
import moment from 'moment'

const testState = {
    actualDate: moment(2000),
    freeDates: [moment(3000), moment(4000)],
    takenDates: [moment(300), moment(400)]
}

test('should setup default filters', () => {
    const action = {type: '@@INIT'}
    const state = filtersReducer(undefined, action)
    expect(state).toEqual({
        actualDate: moment(0),
        freeDates: [],
        takenDates: []
    })
})

test('should set actual date correctly', () => {
    const action = {
        type: 'SET_ACTUAL_DATE',
        actualDate: moment(1000)
    }
    const state = filtersReducer(testState, action)
    expect(state).toEqual({
        ...testState,
        actualDate: moment(1000),
    })
})

test('should push date into freeOn Array', () => {
    const action = {
        type: 'GIVE_SPOT',
        freeOn: moment(8000)
    }
    const state = filtersReducer(testState, action)
    expect(state).toEqual({
        ...testState,
        freeDates: [...testState.freeDates, moment(8000) ]
    })
})

test('should push date into takenOn Array', () => {
    const action = {
        type: 'TAKE_SPOT',
        takenOn: moment(500)
    }
    const state = filtersReducer(testState, action)
    expect(state).toEqual({
        ...testState,
        takenDates: [...testState.takenDates, moment(500) ]
    })
})

test('should remove data from freeOn array', () => {
    const action = {
        type: 'CANCEL_SPOT',
        number: 0,
        freeOn: moment(3000)
    }
    const state = filtersReducer(testState, action)
    expect(state.freeDates).toEqual([moment(4000)])
})

test('should remove data from taken array', () => {
    const action = {
        type: 'REJECT_SPOT',
        number: 0,
        takenOn: moment(300)
    }
    const state = filtersReducer(testState, action)
    expect(state.takenDates).toEqual([moment(400)])
})