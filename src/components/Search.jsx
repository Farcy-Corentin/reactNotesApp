import React from "react";
import {BiSearchAlt2} from "../react-icons/react-icons-proxy";

function Search({ handleSearchNote }) {
    return (
        <div className="search">
            <BiSearchAlt2
                className="search-icon"
                size="1.3rem"
            />
            <input
                type="text"
                placeholder="Votre recherche..."
                onChange={(e) => handleSearchNote(e.target.value)}
            />
        </div>
    )
}

export default Search
