import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'
import { setActualDate} from '../actions/filters';

class DatePicker extends React.Component {
   
    state = {
        date: moment(),
        calendarFocused: true
    }

    onDateChange = (date) => {
        if(date){
            this.setState(() => ({date}))
            this.props.dispatch(setActualDate(date.valueOf()))
        }
    }

    highlightDays = (day) => {
        return this.props.filters.freeDates.some((date) => day.isSame(moment(date), 'day'))
    }

    onFocusChange = ({focused}) => {
        // // this.setState(() => ({calendarFocused:focused}))

        // setTimeout(() => {
        // console.log(!this.props.filters.spotOpen);
        // this.setState(() => ({calendarFocused:!this.props.filters.spotOpen}))
        // }, 50)
        
    }


    render(){
        return(
        <SingleDatePicker
            date={this.state.date}
            onDateChange={this.onDateChange}
            focused={!this.props.filters.spotOpen}
            onFocusChange={this.onFocusChange}
            onNextMonthClick={this.onNextMonthClick}
            onPrevMonthClick={this.onPrevMonthClick}
            isDayHighlighted={this.highlightDays}
            keepOpenOnDateSelect={true}
            numberOfMonths={2}
            orientation='horizontal'
            anchorDirection='right'
            id='1'
        />
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(mapStateToProps)(DatePicker)