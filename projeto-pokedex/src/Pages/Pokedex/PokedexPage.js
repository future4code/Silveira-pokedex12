import React from "react";
import { useHistory } from "react-router-dom";
import { goToHome } from "../../Route/Coordinator";
import {HeaderStyle} from '../HomePage/HomePage'

function PokedexPage() {

    const history = useHistory()

    return (
        <HeaderStyle>
            <button onClick={() => goToHome(history)}>Home</button>
            <h2>Pokedex</h2>
            
        </HeaderStyle>
    )
}

export default PokedexPage;