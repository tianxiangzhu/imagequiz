import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Quiz1 from './components/quiz1';
import Quiz2 from './components/quiz2';
import Quiz3 from './components/quiz3';
import Quiz4 from './components/quiz4';
import Quiz5 from './components/quiz5';
import Quiz6 from './components/quiz6';
import Quiz7 from './components/quiz7';
import Quiz8 from './components/quiz8';

import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' render={props => <Home {...props} />}>
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/quiz1'>
          <Quiz1 />
        </Route>
        <Route path='/quiz2'>
          <Quiz2 />
        </Route>
        <Route path='/quiz3'>
          <Quiz3 />
        </Route>
        <Route path='/quiz4'>
          <Quiz4 />
        </Route>
        <Route path='/quiz5'>
          <Quiz5 />
        </Route>
        <Route path='/quiz6'>
          <Quiz6 />
        </Route>
        <Route path='/quiz7'>
          <Quiz7 />
        </Route>
        <Route path='/quiz8'>
          <Quiz8 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
