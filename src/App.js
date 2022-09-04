import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Exercice1 } from './pages/Exercice1.jsx';
import { Exercice2 } from './pages/Exercice2.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/exercice1'>
          <Exercice1 />
        </Route>
        <Route path='/exercice2'>
          <Exercice2 />
        </Route>
        <Redirect to='/exercice1' />
      </Switch>
    </Router>
  );
}

export default App;
