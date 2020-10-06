import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import ReadyImage from "../pages/ReadyImage";
import Report from "../pages/Report";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/render" exact component={ReadyImage} />
        <Route path="/report" exact component={Report} />
      </Switch>
    </BrowserRouter>
  );
}
