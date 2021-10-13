import React from 'react'
import Modal from 'react-modal';

export default function ErrorModal(props) {
    return (
        <Modal
            isOpen={props.error}
        >
            <p>Search Failed. Please try again.</p>
            <button className="btn btn-primary" onClick={props.handleErrorClear}>Cancel</button>
        </Modal>
    )
}
