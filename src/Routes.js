import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import ErrorPage from "./containers/ErrorPage";
//import Login from "./containers/Login";
import Authenication from "./containers/Signup";
import Store from "./containers/Store";
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/store" exact component={Store} />
      <Route path="/authenticate" exact component={Authenication} />
      <Route component={ErrorPage} />
    </Switch>
  );
}