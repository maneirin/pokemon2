import React from "react";
import pokeball from "../../assets/pokebola.png";
import { Link } from "react-router-dom";

import "./pokeballButton.css";

function PokeballButton({ pokemon, locked }) {

    if (locked) {

        return (

            <button className="pokeball disabled">
                🔒
            </button>

        );
    }

    return (

        <Link to={`/pokemon/${pokemon}`}>

            <button className="pokeball">
                <img
                    src={pokeball}
                    alt="pokeball"
                />
            </button>

        </Link>

    );
}

export default PokeballButton;