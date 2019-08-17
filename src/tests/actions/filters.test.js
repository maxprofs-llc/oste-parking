import {setActualDate} from '../../actions/filters'
import moment from 'moment'

test('should set the actual date', () => {
    const actualDate = moment(0)
    const action = setActualDate(actualDate)
    expect(action).toEqual({
        type: 'SET_ACTUAL_DATE',
        actualDate: moment(0)
    })
})