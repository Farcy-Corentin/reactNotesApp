import './App.css';
import NotesList from "./components/NotesList";
import {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
    const [darkMode, setDarkMode] = useState(false)
    const [searchText, setSearchText] = useState('');
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data')
        )

        if(savedNotes) {
            setNotes(savedNotes)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(
            'react-notes-app-data',
            JSON.stringify(notes)
        )
    }, [notes])

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

    const updateNote = (id,description) => {
        const updateNote = notes.filter((note) => note.id === id)
        updateNote.description = description
        const newNotes = [...notes, updateNote]
        setNotes(newNotes)
    }

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id)
        setNotes(newNotes)
    }

    return (
        <div className={`${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="container">
                <Header handleToggleDarkMode={setDarkMode}/>
                <Search handleSearchNote={setSearchText}/>
                <NotesList
                    notes={notes.filter((note) =>
                        note.description.toLowerCase().includes(searchText)
                    )}
                    handleAddNote={addNote}
                    handleUpdateNote={updateNote}
                    handleDeleteNote={deleteNote}
                />
            </div>
        </div>
    );
}

export default App;
