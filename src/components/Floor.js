import React from 'react'
import SpotsList from './SpotsList'


const Floor = (props) => (
    <div>
        <p>Parking Floor - {props.match.path.substring(1,3)}</p>
        <SpotsList floor={props.match.path.substring(1,3)}/>
    </div>
)

export default Floor