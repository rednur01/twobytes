import React from 'react';
import Modal from './modal';

const AboutModal = (props) => {
    const aboutStyle = {
        color: 'hsl(25, 76%, 31%)'
    };
    return (
    <Modal onClose={props.onClose} title={"About Us"}>
        <div style={aboutStyle}>
            <h1>Two Bites: Recipe App</h1>
            <h4>CS 275 Final Project</h4>
            <b>Client:</b> ReactJS <br />
            <b>Server:</b> NodeJS <br />
            <b>Database:</b> MySQL
        </div>
    </Modal>
    )
};

export default AboutModal;
