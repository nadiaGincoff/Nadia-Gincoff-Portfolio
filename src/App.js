import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Proyects from "./components/Proyects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/proyects'>
          <Proyects />
        </Route>
        <Route path='/about'>
          <AboutMe />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
