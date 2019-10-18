import React from 'react'
import {connect} from 'react-redux'
import Spot from './Spot'


export const SpotsList = ({floor,spots,filters,uid}) => (
    //<div className="spots ">
      //  {spots.map((spot) => {
        //    if(floor === 'u1' && spot.number <= 100)
          //      return <Spot {...spot} {...filters} uid={uid} key={spot.number}/>
            //else if (floor === 'u2' && spot.number >=101 )
              //  return <Spot {...spot} {...filters} uid={uid} key={spot.number}/>
        //})}
    //</div>
    <div className="container">
        <div className="row">
          
            {spots.map((spot) => {
                if(floor === 'u1' && spot.number <= 12)
                    return <div className="col-sm" style={{backgroundColor: 'yellow'}}>50%</div>
        })}
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        spots: state.spots,
        filters: state.filters,
        uid: state.auth.uid
    }
}

export default connect(mapStateToProps)(SpotsList)

