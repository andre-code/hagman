import React, { Component } from 'react';

class Notification extends Component {
    render() {
        return (
            <div className={`notification-container ${this.props.show ? 'show' : ''}`}>
                <p>You have already entered this letter</p>
            </div>
        );
    }
}

export default Notification;