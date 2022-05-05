import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import {motion} from "framer-motion";


function NotesList({ notes, handleAddNote, handleDeleteNote, handleUpdateNote }) {
    return (
        <motion.div layout className="notes-list">
            {notes.map((note) =>
                <Note
                    key={note.id}
                    id={note.id}
                    description={note.description}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                    handleUpdateNote={handleUpdateNote}
                />
            )}
            <AddNote handleAddNote={handleAddNote} />
        </motion.div>
    )
}

export default NotesList
