import React, { useState } from "react";
import Flashcard from "./Flashcard";
import "./Flashcard.css";

const flashcards = [
    {
        question:
            "What is the process of converting data into a code to prevent unauthorized access?",
        answer: "Encryption",
    },
    {
        question:
            "What is the practice of hiding messages within other non-secret text or data?",
        answer: "Steganography",
    },
    {
        question:
            "What is the term for verifying the identity of a user or device?",
        answer: "Authentication",
    },
    {
        question:
            "What is the term for ensuring data is accurate and unaltered?",
        answer: "Integrity",
    },
    {
        question:
            "What is the term for ensuring data is accessible when needed?",
        answer: "Availability",
    },
    {
        question:
            "What is the term for ensuring data is only accessible to those authorized to view it?",
        answer: "Confidentiality",
    },
    {
        question:
            "What is the term for the ability to trace actions to an individual or entity?",
        answer: "Accountability",
    },
    {
        question:
            "What is the term for the process of confirming a user's permissions?",
        answer: "Authorization",
    },
    {
        question:
            "What is the term for the practice of reducing the amount of data collected and stored?",
        answer: "Minimization",
    },
    {
        question:
            "What is the term for the use of multiple methods to verify identity?",
        answer: "MFA",
    },
];

function Cards() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [showAnswer, setShowAnswer] = useState(true);
    const [userAnswer, setUserAnswer] = useState("");
    const [feedback, setFeedback] = useState("");

    const handleNext = () => {
        setIsFlipped(false);
        setShowAnswer(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
        setTimeout(() => setShowAnswer(true), 500);
        setUserAnswer("");
        setFeedback("");
    };

    const handlePrevious = () => {
        setIsFlipped(false);
        setShowAnswer(false);
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 1 + flashcards.length) % flashcards.length
        );
        setTimeout(() => setShowAnswer(true), 500);
        setUserAnswer("");
        setFeedback("");
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleInputChange = (e) => {
        setUserAnswer(e.target.value);
    };

    const handleSubmit = () => {
        if (
            userAnswer.trim().toLowerCase() ===
            flashcards[currentIndex].answer.toLowerCase()
        ) {
            setFeedback("Correct!");
        } else {
            setFeedback("Incorrect. Try again!");
        }
    };

    return (
        <div>
            <div className='cards-container'>
                <Flashcard
                    flashcard={flashcards[currentIndex]}
                    isFlipped={isFlipped}
                    onFlip={handleFlip}
                    showAnswer={showAnswer}
                />
            </div>
            {!isFlipped && (
                <div className='input-container'>
                    <label htmlFor='userAnswer'>Guess the answer here:</label>
                    <input
                        id='userAnswer'
                        type='text'
                        value={userAnswer}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            )}
            <div
                className={`feedback ${
                    feedback === "Correct!" ? "correct" : "incorrect"
                }`}
            >
                {feedback}
            </div>

            <div className='button-container'>
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default Cards;
