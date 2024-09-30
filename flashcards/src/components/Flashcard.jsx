import React from "react";

function Flashcard({ flashcard }) {
    return (
        <div className='card'>
            <div className='front'>
                <h3>{flashcard.question}</h3>
                <ul>
                    {flashcard.options.map((option, index) => (
                        <li key={index}>{option}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default Flashcard;
