import React from 'react'
import {MdDeleteForever} from "../react-icons/react-icons-proxy";

function Note({ id, description, date, handleDeleteNote }) {
    return (
        <div className="note">
            <p>{description}</p>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever
                    className="delete-icon"
                    onClick={() => handleDeleteNote(id)}
                    size="1.3rem"
                />
            </div>
        </div>
    )
}

export default Note
