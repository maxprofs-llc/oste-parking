import React from 'react';
import { connect } from 'react-redux';
import { startOwnSpot, startGiveSpot } from '../actions/spots'
import SpotModal from './SpotModal'
import getFreeSpots from '../selectors/spots'
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
    }
    onClose = () => {
        this.setState(() => ({ open: false }))
    }


    render() {
        return (
            <div>
                <div onClick={this.onOpen}
                    style={this.props.freeOn.some((date) => moment(date).isSame(moment(this.props.actualDate), 'day')) ? divStyleFree : divStyle}
                //style={divStyle}
                >
                    <p style={pStyle}>{this.props.number}</p>

                </div>
                <SpotModal
                    open={this.state.open}
                    onSetOwner={this.onSetOwner}
                    onSetFree={this.onSetFree}
                    owner={this.props.owner}
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
    }
}
const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    background: 'lightgrey',
    margin: 5
}

const divStyleFree = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    background: 'lightgreen',
    margin: 5
}

const pStyle = {
    margin: 0,
    cursor: 'pointer'
}

export default connect(undefined, mapDispatchToProps)(Spot)