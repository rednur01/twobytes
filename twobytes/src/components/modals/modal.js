import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const modalRoot = document.getElementById('modalRoot');

// Styles
const bgShadow = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 98
};
const modalBox = {
    padding: 0,
    background: '#fff',
    borderRadius: '2px',
    display: 'inline-block',
    minHeight: '300px',
    maxHeight: '450px',
    margin: '1rem',
    position: 'relative',
    top: '0vh',
    minWidth: '300px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    justifySelf: 'center',
    overflow: 'auto',
    zIndex: 99
};
const modalHeader = {
    position: 'relative',
    top: '0',
    left: '0',
    right: '0',
    height: '30px',
    backgroundColor: 'hsl(94, 41%, 58%)',
    color: 'white',
    fontSize: '1.5rem',
    lineHeight: '30px',
    paddingLeft: '4px'
};
const closeButton = {
    backgroundColor: 'hsl(94, 41%, 58%)',
    border: 'none',
    float: 'right',
    height: '100%',
    color: 'white',
    fontSize: '1.5rem',
    outline: 'none',
    cursor: 'pointer'
};
const modalBody = {
    padding: '5px'
};

class Modal extends Component {
    render() {
        return ReactDOM.createPortal(
            <div style={bgShadow}>
                <div style={modalBox}>
                    <div style={modalHeader}>
                        <span>
                            {this.props.title}
                            <button onClick={this.props.onClose} style={closeButton}>
                                <FontAwesomeIcon icon="times"/>
                            </button>
                        </span>
                    </div>
                    <div style={modalBody}>
                        {this.props.children}
                    </div>
                </div>
            </div>,
        modalRoot
        )
    }
}

export default Modal;
