import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";

function App() {
    return (
        <div className='App'>
            <h1>Cybersecurity Governance Flashcards</h1>
            <h2>Test your knowledge of security concepts</h2>
            <h4>Click on the card to flip it and reveal the answer</h4>
            <h4>Number of Cards: 10</h4>
            <Cards />
        </div>
    );
}

export default App;
