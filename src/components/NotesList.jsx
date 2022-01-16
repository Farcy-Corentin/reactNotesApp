import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

function NotesList({ notes, handleAddNote }) {
    return (
        <div className="notes-list">
            {notes.map((note) =>
                <Note
                    key={note.id}
                    description={note.description}
                    date={note.date}
                />
            )}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}

export default NotesList
