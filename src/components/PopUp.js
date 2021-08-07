import React, { useEffect } from 'react';
import {checkWin} from '../helpers/helpers';

const PopUp = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
    let finalMessage = '';
    let finalMessageRevealWord = '';
    let playable = true;

    useEffect(() => setPlayable(playable));

    const status = checkWin(correctLetters, wrongLetters, selectedWord);
    if (status === 'win') {
        finalMessage = 'Congratulations, you won! 🥳';
        playable = false;
    } else if (status === 'lose') {
        finalMessage = 'Unfortunately you lost 😕';
        finalMessageRevealWord = `... the word was: ${selectedWord}`;
        playable = false;
    }

    return (
        <div className="popup-container" style={finalMessage !== '' ? {display: 'flex'} : {}}>
            <div className="popup">
                <h2>{ finalMessage }</h2>
                <h3>{ finalMessageRevealWord }</h3>
                <button onClick={playAgain}>Play Again</button>
            </div>
        </div>

    );
}

export default PopUp;