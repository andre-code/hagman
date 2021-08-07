import React, { Component } from 'react';

class Word extends Component {
    render() {
        return (
            <div className={'word'} id={'word'}>
                { this.props.selectedWord.split('').map( (letter, i) =>  {
                    return (
                        <span className={'letter'} key={i}>
                            { this.props.correctLetters.includes(letter) ?  letter : ''}
                        </span>
                    )
                })}
            </div>
        );
    }
}

export default Word;