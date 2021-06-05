import React from "react";
import Menu from "./Menu.jsx";

import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import { Route, Switch, Redirect } from "react-router-dom";
const Body = () => {
  return (
    <>
      <Switch>
        <Route path="/home" exact render={() => <Home />} />
        <Route path="/menu" exact render={() => <Menu />} />
        <Route path="/about" exact render={() => <About />} />
        <Route path="/contact" exact render={() => <Contact />} />
        <Redirect from="/" to="/home" />
      </Switch>
    </>
  );
};
export default Body;
