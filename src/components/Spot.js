import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startOwnSpot, startGiveSpot } from '../actions/spots'
import { setSpotOpen } from '../actions/filters'
import SpotModal from './SpotModal'
import moment from 'moment'

const Spot = (props) => {

    const [open, setOpen] = useState(false)

    const onSetOwner = () => {
        props.setOwner({ id: props.id })
    }
    const onSetFree = () => {
        props.setFree({ id: props.id, freeOn: props.actualDate })
    }
    const onOpen = () => {
        setOpen(true)
        props.setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
        props.setOpen(false)
    }

    return (
        <div>
            <div onClick={onOpen}
                className={
                    (props.freeOn.some((date) => moment(date).isSame(moment(props.actualDate), 'day'))
                        ?
                        'spotdiv spotdiv--free' : 'spotdiv')}
            >
                <p>{props.number}</p>
            </div>
            <SpotModal
                open={open}
                onSetOwner={onSetOwner}
                onSetFree={onSetFree}
                owner={props.owner}
                onClose={onClose}
                number={props.number}
            />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOwner: (data) => dispatch(startOwnSpot(data)),
        setFree: (data) => dispatch(startGiveSpot(data)),
        setOpen: (data) => dispatch(setSpotOpen(data))
    }
}

export default connect(undefined, mapDispatchToProps)(Spot)