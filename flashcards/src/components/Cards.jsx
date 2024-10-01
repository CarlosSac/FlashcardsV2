import React, { useState } from "react";
import Flashcard from "./Flashcard";
import './Flashcard.css';

const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of Spain?", answer: "Madrid" },
    // Add more flashcards as needed
];

function Cards() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    };

    return (
        <div className="cards-container">
            <Flashcard flashcard={flashcards[currentIndex]} />
            <div className="button-container">
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default Cards;