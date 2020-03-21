import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Authentication from "./Contexts/Authentication";
import { ProtectedRoute } from "./Components/ProtectedRoute";

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
import NotFound from "./Pages/NotFound";

export default function App() {
  return (
    <Router>
      <Authentication>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/sign-up">
            <SignUp></SignUp>
          </Route>
          <ProtectedRoute
            exact
            path="/petunjuk"
            component={Petunjuk}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/kuesioner"
            component={Kuesioner}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/hasil"
            component={Hasil}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/pemilihan-materi"
            component={PemilihanMateri}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/beranda"
            component={Beranda}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/daftar-materi"
            component={DaftarMateri}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/daftar-sub-materi"
            component={DaftarSubMateri}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/sub-materi"
            component={SubMateri}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/daftar-evaluasi"
            component={DaftarEvaluasi}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/soal-evaluasi"
            component={SoalEvaluasi}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/hasil-evaluasi"
            component={HasilEvaluasi}
          ></ProtectedRoute>
          <Route path="*" component={() => <NotFound />} />
        </Switch>
      </Authentication>
    </Router>
  );
}
