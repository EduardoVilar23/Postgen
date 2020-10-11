import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "../Components/Menu";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import ReadyImage from "../pages/ReadyImage";
import Contact from "../pages/Contact";

export default function Router() {
  return (
    <BrowserRouter>
    <Menu/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/render" exact component={ReadyImage} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/pricing" exact component={Pricing} />
      </Switch>
    </BrowserRouter>
  );
}
