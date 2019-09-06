import React from 'react';
import { connect } from 'react-redux';
import { startOwnSpot, startGiveSpot } from '../actions/spots'
import { setSpotOpen } from '../actions/filters'
import SpotModal from './SpotModal'
import moment from 'moment'

class Spot extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    onSetOwner = () => {
        this.props.setOwner({ id: this.props.id })
    }
    onSetFree = () => {
        this.props.setFree({ id: this.props.id, freeOn: this.props.actualDate })
    }
    onOpen = () => {
        this.setState(() => ({ open: true }))
        this.props.setOpen(true)
    }
    onClose = () => {
        this.setState(() => ({ open: false }))
        this.props.setOpen(false)
    }

    
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
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOwner: (data) => dispatch(startOwnSpot(data)),
        setFree: (data) => dispatch(startGiveSpot(data)),
        setOpen: (data) => dispatch(setSpotOpen(data))
    }
}


export default connect(undefined, mapDispatchToProps)(Spot)