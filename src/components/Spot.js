import React from 'react';
import { connect } from 'react-redux';
import {startOwnSpot, startGiveSpot} from '../actions/spots'
import getFreeSpots from '../selectors/spots'
import moment from 'moment'


export const Spot = ({number,id,owner,actualDate,freeOn,setOwner,setFree}) => (
    <div 
    style={freeOn.some((date) => moment(date).isSame(moment(actualDate), 'day')) ? divStyleFree: divStyle}
    //style={divStyle}
        >
        <p style={pStyle}>{number}</p>
        <p style={pStyle}>{owner}</p>
        <button onClick={() => {
                setOwner({id,owner:'Tiffany'})
            }}>own</button>
        <button onClick={() => {
                setFree({id, freeOn: actualDate})
            }}>give</button>
    </div>
)

const mapDispatchToProps = (dispatch) => {
    return {
        setOwner: (data) => dispatch(startOwnSpot(data)),
        setFree: (data) => dispatch(startGiveSpot(data)),
    }
}
const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
    background: 'lightgrey',
    margin: 5
}

const divStyleFree = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
    background: 'lightgreen',
    margin: 5
}

const pStyle = {
    margin: 0
}


export default connect(undefined,mapDispatchToProps)(Spot)