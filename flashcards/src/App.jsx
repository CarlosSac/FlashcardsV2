import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Flashcard from "./components/Flashcard";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    const sampleFlashcard = {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
    };

    return (
        <div className='App'>
            <h1>Flashcards!</h1>
            <Flashcard flashcard={sampleFlashcard} />
        </div>
    );
}

export default App;
