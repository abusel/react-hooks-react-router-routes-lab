import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { movies, actors, directors } from "../data";

function App() {
  return <><NavBar />
      <Switch>
        <Route path='/movies'>
            <Movies movies={movies}/>
        </Route>
        <Route path='/directors'>
            <Directors directors={directors}/>
        </Route>
        <Route path= '/actors'>
            <Actors actors={actors}/>
        </Route>
        <Route exact path='/'>
            <Home/>
        </Route>
      </Switch>
    
    </>
    
    ;
}

export default App;
