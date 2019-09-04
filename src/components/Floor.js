import React from 'react'
import SpotsList from './SpotsList'


const Floor = (props) => (
        <SpotsList floor={props.match.path.substring(1,3)}/>
)

export default Floor