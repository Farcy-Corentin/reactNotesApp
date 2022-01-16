import './App.css';
import NotesList from "./components/NotesList";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

function App() {
    const [notes, setNotes] = useState([]);

    const addNote = (description) => {
        const date = new Date();
        const newNote = {
            id: uuidv4(),
            description: description,
            date: date.toLocaleDateString()
        }
        const newNotes = [...notes, newNote]
        setNotes(newNotes)
    }
    return (
        <div className="container">
            <h1>Pour mieux retenir!</h1>
            <NotesList notes={notes} handleAddNote={addNote}/>
        </div>
    );
}

export default App;
