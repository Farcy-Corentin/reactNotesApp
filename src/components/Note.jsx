import React from 'react'
import {MdDeleteForever} from "../react-icons/react-icons-proxy";

function Note({ description, date }) {
    return (
        <div className="note">
            <p>{description}</p>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className="delete-icon" size="1.3rem"/>
            </div>
        </div>
    )
}

export default Note
