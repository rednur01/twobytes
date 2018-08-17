import React, { Component } from 'react';

class HealthLabel extends Component {
    render() {
        return (
            <div className="HealthLabel">
                <button className={this.props.label.toLowerCase()}>{this.props.label}</button>
            </div>
        );
    }
}

export default HealthLabel;
