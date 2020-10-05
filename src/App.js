import React, { Fragment, Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users"
import "./App.css";

class App extends Component {
  // render este life cycle method



  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab f-github" />
          <div className="container">
            <Users />
          </div>
        <h1>My App</h1>
      </div>
    );
  }
}

export default App;
