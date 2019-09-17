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

<<<<<<< HEAD
    return (
        <div>
            <div onClick={onOpen}
                className={
                    (props.freeOn.some((date) => moment(date).isSame(moment(props.actualDate), 'day'))
                        ?
                        'spotdiv spotdiv--free' : 'spotdiv')}
            >
                <p>{props.number}</p>
=======
    
    render() {
        return (
            <div>
                <div onClick={this.onOpen}
                className={
                    (this.props.freeOn.some((date) => moment(date).isSame(moment(this.props.actualDate), 'day')) 
                    ? 
                    'spotdiv spotdiv--free' : 'spotdiv')}
                >
                    <p>{this.props.number}</p>

                </div>
                <SpotModal
                    open={this.state.open}
                    onSetOwner={this.onSetOwner}
                    onSetFree={this.onSetFree}
                    owner={this.props.owner}
                    uid={this.props.uid}
                    ownerid={this.props.ownerid}
                    onClose={this.onClose}
                    number={this.props.number}
                />
>>>>>>> ae68f8aef3bbff125cd0291e48a023d04d853ed3
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