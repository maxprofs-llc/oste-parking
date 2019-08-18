import React from 'react'
import {connect} from 'react-redux'
import Spot from './Spot'


export const SpotsList = (props) => (
    <div style={{display: 'flex'}}>
        {props.spots.map((spot) => {
            if(props.floor === 'u1' && spot.number <= 10 )
                return <Spot {...spot} {...props.filters} key={spot.number}/>
            else if (props.floor === 'u2' && spot.number >=11 )
                return <Spot {...spot} {...props.filters} key={spot.number}/>
        })}
    </div>
)

const mapStateToProps = (state) => {
    return {
        spots: state.spots,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(SpotsList)

