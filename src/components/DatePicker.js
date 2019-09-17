import React, { useState } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import { setActualDate } from '../actions/filters';

const DatePicker = (props) => {

    const [date, setDate] = useState(moment())

    const onDateChange = (date) => {
        if (date) {
            setDate(date)
            props.dispatch(setActualDate(date.valueOf()))
        }
    }

    const highlightDays = (day) => {
        return props.filters.freeDates.some((date) => day.isSame(moment(date), 'day'))
    }

    const onFocusChange = ({ focused }) => {

    }

    return (
        <SingleDatePicker
            date={date}
            onDateChange={onDateChange}
            focused={!props.filters.spotOpen}
            onFocusChange={onFocusChange}
            isDayHighlighted={highlightDays}
            keepOpenOnDateSelect={true}
            numberOfMonths={2}
            orientation='horizontal'
            anchorDirection='right'
            id='1'
        />
    )

}

const mapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(mapStateToProps)(DatePicker)