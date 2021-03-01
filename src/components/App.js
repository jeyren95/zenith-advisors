import React from "react";
import {Route, Router} from "react-router-dom";

import Home from "./Home";
import Life from "./Life";

import history from "../history";

class App extends React.Component {

  render() {
    return (
      <div>
        <Router history={history}>
            <Route path="/" exact component={Home} />
            <Route path="/life-at-zenith" exact component={Life} />
        </Router>
      </div>
    )
  }

}


export default App;
