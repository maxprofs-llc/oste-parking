import React from 'react';
import { connect } from 'react-redux';
import {ownSpot, giveSpot} from '../actions/spots'
import getFreeSpots from '../selectors/spots'
import moment from 'moment'


const Spot = ({number,owner,dispatch, actualDate, freeOn}) => (
    <div style={freeOn.some((date) => date.isSame(actualDate, 'day')) ? divStyleFree : divStyle}>
        <p style={pStyle}>{number}</p>
        <p style={pStyle}>{owner}</p>
        <button onClick={() => {
                dispatch(ownSpot({owner:'Tiffany', number}))
            }}>own</button>
        <button onClick={() => {
                dispatch(giveSpot({number, freeOn: actualDate}))
            }}>give</button>
    </div>
)

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


export default connect()(Spot)