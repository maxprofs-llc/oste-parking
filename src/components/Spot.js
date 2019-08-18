import React from 'react';
import { connect } from 'react-redux';
import {ownSpot, giveSpot, takeSpot} from '../actions/spots'
import getFreeSpots from '../selectors/spots'
import moment from 'moment'


export const Spot = ({number,owner,actualDate,freeOn,setOwner,setFree,setTaken,taken}) => (
    <div 
    style={freeOn.some((date) => date.isSame(actualDate, 'day')) ? 
    (taken.some((date) => date.takenOn.isSame(actualDate, 'day')) ? 
    divStyleTaken : divStyleFree) 
    : divStyle}
        >
        <p style={pStyle}>{number}</p>
        <p style={pStyle}>{owner}</p>
        <button onClick={() => {
                setOwner({owner:'Tiffany', number})
            }}>own</button>
        <button onClick={() => {
                setFree({number, freeOn: actualDate})
            }}>give</button>
        <button onClick={() => {
                setTaken({number, takenOn: actualDate, takenBy: 'Maddin'})
            }}>take</button> 
    </div>
)

const mapDispatchToProps = (dispatch) => {
    return {
        setOwner: (data) => dispatch(ownSpot(data)),
        setFree: (data) => dispatch(giveSpot(data)),
        setTaken: (data) => dispatch(takeSpot(data))
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

const divStyleTaken = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
    background: 'red',
    margin: 5
}

const pStyle = {
    margin: 0
}


export default connect(undefined,mapDispatchToProps)(Spot)