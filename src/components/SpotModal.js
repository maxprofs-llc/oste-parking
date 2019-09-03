import React from 'react'
import Modal from 'react-modal'

const SpotModal = ({ open, number, onSetOwner, onSetFree, owner, onClose }) => (
    <Modal
        isOpen={open}
        contentLabel="Selected Spot"
        onRequestClose={onClose}
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
    >
        <p className="header__title" style={pStyle}>{number}</p>
        <p className="header__title" style={pStyle}>{owner}</p>
        <button className="button" onClick={onSetOwner}>Meiner!</button>
        <button className="button" onClick={onSetFree}>Parken!</button>
    </Modal>
)

const pStyle = {
    margin: 0
}

export default SpotModal