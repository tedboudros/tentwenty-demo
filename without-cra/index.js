import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App.js";
import "./assets/styles/main.scss";

const router = (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
    asdfasdfadsf
  </>
);

ReactDOM.render(router, document.getElementById("root"));
