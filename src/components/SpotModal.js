import React from 'react'
import Modal from 'react-modal'

const SpotModal = ({ open, onSetOwner, onSetFree, owner, onClose }) => (
    <Modal
        isOpen={open}
        contentLabel="Selected Spot"
        onRequestClose={onClose}
        ariaHideApp={false}
    >
        <h3>Selected Spot</h3>
        <p style={pStyle}>{owner}</p>
        <button onClick={onSetOwner}>own</button>
        <button onClick={onSetFree}>give</button>
        <button onClick={onClose}>Close</button>
    </Modal>
)

const pStyle = {
    margin: 0
}

export default SpotModal