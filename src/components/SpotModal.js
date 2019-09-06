import React from 'react'
import Modal from 'react-modal'

const SpotModal = ({ open, number, onSetOwner, onSetFree, owner, onClose, ownerid, uid }) => (
    <Modal
        isOpen={open}
        contentLabel="Selected Spot"
        onRequestClose={onClose}
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
    >
        <p className="header__title" style={pStyle}>{number}</p>
        <p className="header__title" style={pStyle}>gehört</p>
        <p className="header__title" style={pStyle}>{owner || 'niemand'}</p>
        {uid !== ownerid && <button className="button" disabled={false} onClick={onSetOwner}>Meiner!</button>}
        {uid === ownerid && <button className="button" onClick={onSetFree}>Geben!</button>}
    </Modal>
)

const pStyle = {
    margin: 0
}

export default SpotModal