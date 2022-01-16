import React, {useState} from "react";

function AddNote({handleAddNote}) {
    const [noteDescription, setNoteDescription] = useState('')
    const characterLimit = 500
    const handleChange = (e) => {
        if(characterLimit - e.target.value.length >= 0) {
            setNoteDescription(e.target.value)
        }
    }

    const handleSaveClick = () => {
        if (noteDescription.trim().length > 0) {
            handleAddNote(noteDescription)
            setNoteDescription('')
        }
    }

    return (
        <div className="note new">
            <textarea
                cols="10"
                rows="15"
                placeholder="Votre note..."
                value={noteDescription}
                onChange={handleChange}
            />
            <div className="note-footer">
                <small>{characterLimit - noteDescription.length} caractères restant</small>
                <button className="save" onClick={handleSaveClick}>Sauvegarder</button>
            </div>
        </div>
    )
}

export default AddNote
