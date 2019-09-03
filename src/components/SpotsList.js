import React from 'react'
import {connect} from 'react-redux'
import Spot from './Spot'


export const SpotsList = ({floor,spots,filters}) => (
    <div className="spots content_container">
        {spots.map((spot) => {
            if(floor === 'u1' && spot.number <= 100)
                return <Spot {...spot} {...filters} key={spot.number}/>
            else if (floor === 'u2' && spot.number >=101 )
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

