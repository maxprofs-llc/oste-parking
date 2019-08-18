import filtersReducer from '../../reducers/filters'
import moment from 'moment'
import {filters} from '../fixtures'

test('should setup default filters', () => {
    const action = {type: '@@INIT'}
    const state = filtersReducer(undefined, action)
    expect(state).toEqual({
        actualDate: moment(),
        freeDates: [],
        takenDates: []
    })
})

test('should set actual date correctly', () => {
    const action = {
        type: 'SET_ACTUAL_DATE',
        actualDate: moment(1000)
    }
    const state = filtersReducer(filters, action)
    expect(state).toEqual({
        ...filters,
        actualDate: moment(1000),
    })
})

test('should push date into freeOn Array', () => {
    const action = {
        type: 'GIVE_SPOT',
        freeOn: moment(8000)
    }
    const state = filtersReducer(filters, action)
    expect(state).toEqual({
        ...filters,
        freeDates: [...filters.freeDates, moment(8000) ]
    })
})

test('should push date into takenOn Array', () => {
    const action = {
        type: 'TAKE_SPOT',
        takenOn: moment(500)
    }
    const state = filtersReducer(filters, action)
    expect(state).toEqual({
        ...filters,
        takenDates: [...filters.takenDates, moment(500) ]
    })
})

test('should remove data from freeOn array', () => {
    const action = {
        type: 'CANCEL_SPOT',
        number: 0,
        freeOn: moment(3000)
    }
    const state = filtersReducer(filters, action)
    expect(state.freeDates).toEqual([moment(4000)])
})

test('should remove data from taken array', () => {
    const action = {
        type: 'REJECT_SPOT',
        number: 0,
        takenOn: moment(300)
    }
    const state = filtersReducer(filters, action)
    expect(state.takenDates).toEqual([moment(400)])
})