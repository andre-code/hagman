import React, { Component } from 'react';

class WrongLetters extends Component {
    render() {
        return (
            <div className="wrong-letters-container">
                <div>
                    { this.props.wrongLetters.length > 0 && <p>Wrong: </p> }
                    { this.props.wrongLetters.map( (letter, i) => {
                      return <span key={i}>{letter}</span>
                    }).reduce( (prev, curr) => prev === null ? [curr] : [prev, ',', curr], null)}
                </div>
            </div>
        );
    }
}

export default WrongLetters;