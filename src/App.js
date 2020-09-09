import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import './light.css';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/projects'>
          <Projects />
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
