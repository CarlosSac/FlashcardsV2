import React from "react";
import "./Flashcard.css";

function Flashcard({ flashcard, isFlipped, onFlip }) {
    return (
        <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={onFlip}>
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
