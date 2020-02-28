import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Petunjuk from "./Pages/Petunjuk";
import Kuesioner from "./Pages/Kuesioner";
import Hasil from "./Pages/Hasil";
import PemilihanMateri from "./Pages/PemilihanMateri";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/sign-up">
          <SignUp></SignUp>
        </Route>
        <Route path="/petunjuk">
          <Petunjuk></Petunjuk>
        </Route>
        <Route path="/kuesioner">
          <Kuesioner></Kuesioner>
        </Route>
        <Route path="/hasil">
          <Hasil></Hasil>
        </Route>
        <Route path="/pemilihan-materi">
          <PemilihanMateri></PemilihanMateri>
        </Route>
      </Switch>
    </Router>
  );
}
