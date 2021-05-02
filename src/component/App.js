import React from "react";
// import Header from "./header";
// import history from './history';
import Book  from '../showItems/book';
import Fashion  from '../showItems/fashion';
import  Electronic from '../showItems/electronic';
import Home from './home';

import {
   BrowserRouter as Router,
  Route,
 Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router >
      <Switch>
      <Route   exact path="/"  component={Home}/>
      <Route exact path="/book" component={Book}/>
      <Route exact path="/fashion" component={Fashion}/>
      <Route exact path="/electronic" component={Electronic}/>
      </Switch>
   </Router>
  );
}

export default App;
