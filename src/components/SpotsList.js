import React from 'react'
import {connect} from 'react-redux'
import Spot from './Spot'


const SpotsList = (props) => (
    <div style={{display: 'flex'}}>
        {props.spots.map((spot) => {
            if(props.floor === 'u1' && spot.number <= 5 )
                return <Spot {...spot} {...props.filters} key={spot.number}/>
            else if (props.floor === 'u2' && spot.number >= 6 )
                return <Spot {...spot} {...props.filters} key={spot.number}/>
        })}
    </div>
)

const mapStateToProps = (state) => {
    return {
        //freeSpots: getFreeSpots(state.spots, state.filters)
        spots: state.spots,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(SpotsList)

