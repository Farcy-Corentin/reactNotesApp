import React from 'react'
import {MdDeleteForever} from "../react-icons/react-icons-proxy";
import {motion} from "framer-motion";

function Note({id, description, date, handleDeleteNote}) {

    return (
        <motion.div
            whileHover={{scale: 1.05}}
            whileVisible={{x: 50}}
            transition={{duration: 0.25}}
            className="note"
        >
            <p>{description}</p>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever
                    className="delete-icon"
                    onClick={() => handleDeleteNote(id)}
                    size="1.3rem"
                />
            </div>
        </motion.div>
    )
}

export default Note
