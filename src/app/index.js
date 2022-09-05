import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Exercice1 } from "../pages/Exercice1";
import { Exercice2 } from "../pages/Exercice2";
import "./App.scss";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Exercice1 />
        </Route>
        <Route path="/exercice2">
          <Exercice2 />
        </Route>
        <Redirect to="/exercice1" />
      </Switch>
    </Router>
  );
}

