import React , {useEffect} from "react";

import { useHistory } from "react-router";
import { goToHome, goToPokedex } from "../Routes/Coordinator";
import styled from "styled-components";

export const HeaderContainer = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    padding: 0 10px;
    background-color: #e3293b;
`


const Header = () => {

    useEffect(() => {
        
    })

    const history = useHistory()
    return(
        <HeaderContainer>
           
          {
              history.location.pathname!=="/pokedex"
              ?
              <> 
                <button onClick={()=> goToPokedex(history)}>Pokedex</button>
              </>
              :
              <> <button onClick={()=> goToHome(history)} >   HOME </button></>
          }
        </HeaderContainer>
        
    )
}

export default Header