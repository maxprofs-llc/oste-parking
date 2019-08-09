import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'
import { setActualDate, setStartDate, setEndDate } from '../actions/filters';
import getFreeSpots from '../selectors/spots'
import {ownSpot, giveSpot} from '../actions/spots'
import 'react-dates/lib/css/_datepicker.css'


class DatePicker extends React.Component {
   
    state = {
        date: moment(),
        calendarFocused: true
    }

 
    onDateChange = (date) => {
        if(date){
            this.setState(() => ({date}))
            this.props.dispatch(setActualDate(date))
        }
    }

    onNextMonthClick = (month) =>{

    }

    onPrevMonthClick = (month) => {

    }

    highlightDays = (day) => {

        return this.props.filters.freeDates.some((date) => day.isSame(date, 'day'))
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused:focused}))

        setTimeout(() => {
            this.setState(() => ({calendarFocused:true}))
        }, 1)
        
    }


    render(){
        return(
        <SingleDatePicker
            date={this.state.date}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            onNextMonthClick={this.onNextMonthClick}
            onPrevMonthClick={this.onPrevMonthClick}
            isDayHighlighted={this.highlightDays}
            keepOpenOnDateSelect={true}
            numberOfMonths={2}
            id='1'
        />
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(mapStateToProps)(DatePicker)