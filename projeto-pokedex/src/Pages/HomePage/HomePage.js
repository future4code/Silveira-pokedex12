import React from "react";
import { useHistory } from "react-router-dom";
import { goToPokedex } from "../../Route/Coordinator";
import styled from 'styled-components'

export const HeaderStyle = styled.div`
display: flex;
justify-content: space-between;
margin: 2vh;
align-items: center;
`




function HomePage(){
      
    const history = useHistory()

    return(
        <HeaderStyle>
            <button onClick={()=>goToPokedex(history)}>Pokédex</button>
            <h2>Lista de Pokémons</h2>
        
        </HeaderStyle>
    )
}
export default HomePage;