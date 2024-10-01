import React, { useState } from "react";
import './Flashcard.css';

function Flashcard({ flashcard }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className='front'>
                <h3>{flashcard.question}</h3>
            </div>
            <div className='back'>
                <h3>{flashcard.answer}</h3>
            </div>
        </div>
    );
}

export default Flashcard;