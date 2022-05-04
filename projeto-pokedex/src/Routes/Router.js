import React from "react"
import HomePage from "../Pages/HomePage/HomePage"
import DetailPage from "../Pages/DetailPage/DetailPage"
import PokedexPage from "../Pages/Pokedex/PokedexPage"

import { BrowserRouter, Switch, Route } from "react-router-dom";

function Router ()
{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage/>
                </Route>
                
                <Route exact path={"/pokedex"}>
                    <PokedexPage/>
                </Route>
                
                <Route exact path={"/details/:id"}>
                    <DetailPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router 
