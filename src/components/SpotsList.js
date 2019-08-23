import React from 'react'
import {connect} from 'react-redux'
import Spot from './Spot'


export const SpotsList = ({floor,spots,filters}) => (
    <div style={{display: 'flex'}}>
        {spots.map((spot) => {
            if(floor === 'u1' && spot.number <= 10 )
                return <Spot {...spot} {...filters} key={spot.number}/>
            else if (floor === 'u2' && spot.number >=11 )
                return <Spot {...spot} {...filters} key={spot.number}/>
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

