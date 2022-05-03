import React from "react"
import HomePage from "../Pages/HomePage/HomePage"
import DetailPage from "../Pages/Detail Page"
import PokedexPage from "../Pages/Pokedex/PokedexPage"

import{BrowserRouter , Route , Switch } from "react-router-dom"

function Router ()
{
    return(
        <BrowserRouter>
            <switch>
                <Route exact path={"/"}>
                    <HomePage/>
                </Route>
                
                <Route exact path={"/pokedex"}>
                    <PokedexPage/>
                </Route>
                
                <Route exact path={"/datais/:id"}>
                    <DetailPage/>
                </Route>
            </switch>
        </BrowserRouter>
    )
}
export default Router 
