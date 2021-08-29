import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Galeria from "./components/pages/Galeria";

function App() {
  return (
    <div className="box">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/galeria" exact component={Galeria} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
