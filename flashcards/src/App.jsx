import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Flashcard from "./components/Flashcard";
import "./App.css";
import Cards from "./components/Cards";

function App() {
    const [count, setCount] = useState(0);

    const sampleFlashcard = {
        question: "What is React?",
        answer: "A library for building user interfaces",
    };

    return (
        <div className='App'>
            <h1>Flashcards!</h1>
            <Cards />
        </div>
    );
}

export default App;
