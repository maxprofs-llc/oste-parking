import React from 'react'
import SpotsList from './SpotsList'


const Floor = (props) => (
    <div>
        <SpotsList floor={props.match.path.substring(1,3)}/>
    </div>
)

export default Floor