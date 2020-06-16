import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/Pages/HomePage/HomePage";
import DetailsPage from "./components/Pages/Details-Page/Details-Page";
import CreatePage from "./components/Pages/Create-Page/Create-Page";
import PostPage from "./components/Pages/Post-Page/Post-Page";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/create" component={CreatePage} />
        <Route path="/posts/:id" component={DetailsPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
