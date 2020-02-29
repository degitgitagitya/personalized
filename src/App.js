import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Petunjuk from "./Pages/Petunjuk";
import Kuesioner from "./Pages/Kuesioner";
import Hasil from "./Pages/Hasil";
import PemilihanMateri from "./Pages/PemilihanMateri";
import Beranda from "./Pages/Beranda";
import DaftarMateri from "./Pages/DaftarMateri";
import DaftarSubMateri from "./Pages/DaftarSubMateri";
import SubMateri from "./Pages/SubMateri";
import DaftarEvaluasi from "./Pages/DaftarEvaluasi";
import SoalEvaluasi from "./Pages/SoalEvaluasi";
import HasilEvaluasi from "./Pages/HasilEvaluasi";

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
        <Route path="/beranda">
          <Beranda></Beranda>
        </Route>
        <Route path="/daftar-materi">
          <DaftarMateri></DaftarMateri>
        </Route>
        <Route path="/daftar-sub-materi">
          <DaftarSubMateri></DaftarSubMateri>
        </Route>
        <Route path="/sub-materi">
          <SubMateri></SubMateri>
        </Route>
        <Route path="/daftar-evaluasi">
          <DaftarEvaluasi></DaftarEvaluasi>
        </Route>
        <Route path="/soal-evaluasi">
          <SoalEvaluasi></SoalEvaluasi>
        </Route>
        <Route path="/hasil-evaluasi">
          <HasilEvaluasi></HasilEvaluasi>
        </Route>
      </Switch>
    </Router>
  );
}
