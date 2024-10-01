import React, { useState } from "react";
import Flashcard from "./Flashcard";
import "./Flashcard.css";

const flashcards = [
    {
        question: "What is the Information Security?",
        answer: "Information security is the confidentiality, integrity, and availability of information",
    },
    {
        question: "What are the security controls that ensure Integrity?",
        answer: "Hashing, Digital Signatures, and Certificates",
    },
    {
        question: "What are the security controls that ensure Confidentiality?",
        answer: "Encryption, Access Controls, and Steganography",
    },
    {
        question: "What are the security controls that ensure Availability?",
        answer: "Redundancy, Backups, and Disaster Recovery",
    },
    {
        question: "What are the security controls that ensure Authentication?",
        answer: "Passwords, Biometrics, and Multi-factor Authentication",
    },
    {
        question: "What are the security controls that ensure Non-repudiation?",
        answer: "Digital Signatures, Certificates, and Logging",
    },
    {
        question: "What are the security controls that ensure Authorization?",
        answer: "Access Controls, Permissions, and Role-based Access Control",
    },
    {
        question: "What are the security controls that ensure Accountability?",
        answer: "Logging, Auditing, and Monitoring",
    },
    {
        question: "What are the security controls that ensure Privacy?",
        answer: "Data Minimization, Data Masking, and Data Encryption",
    },
    {
        question: "What is the CIA Triad?",
        answer: "Confidentiality, Integrity, and Availability",
    },
];

function Cards() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
        setIsFlipped(false);
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div>
            <div className='cards-container'>
                <Flashcard
                    flashcard={flashcards[currentIndex]}
                    isFlipped={isFlipped}
                    onFlip={handleFlip}
                />
            </div>

            <div className='button-container'>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default Cards;
