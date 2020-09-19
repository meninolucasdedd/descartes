import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" component={Cadastro} />
      </Switch>
    );
  }
}
