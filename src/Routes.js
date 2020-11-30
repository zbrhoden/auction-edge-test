import React from "react";
import { Link, Route } from "react-router-dom";
import FormExample from "./components/FormExample";
import ListExample from "./components/ListExample";

const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <img src="../apple-touch-icon-lg.png" alt="logo" />
        <p>Auction Edge - React App</p>
        <Link className="App-link" to="/examples/list">
          #1 - List Feature
        </Link>
        <Link className="App-link" to="/examples/form">
          #2 - Form Feature
        </Link>
      </Route>
      <Route exact path="/examples/list">
        <ListExample />
      </Route>
      <Route exact path="/examples/form">
        <FormExample />
      </Route>
    </>
  );
};

export default Routes