import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Authentication from './Contexts/Authentication';
import { ProtectedRoute } from './Components/ProtectedRoute';

import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Petunjuk from './Pages/Petunjuk';
import Kuesioner from './Pages/Kuesioner';
import Hasil from './Pages/Hasil';
import PemilihanMateri from './Pages/PemilihanMateri';
import Beranda from './Pages/Beranda';
import DaftarMateri from './Pages/DaftarMateri';
import DaftarSubMateri from './Pages/DaftarSubMateri';
import SubMateri from './Pages/SubMateri';
import DaftarEvaluasi from './Pages/DaftarEvaluasi';
import SoalEvaluasi from './Pages/SoalEvaluasi';
import HasilEvaluasi from './Pages/HasilEvaluasi';
import NotFound from './Pages/NotFound';
import FunctionContent from './Pages/FunctionContent';
import PetunjukVideo from './Pages/PetunjukVideo';
import PDFReader from './Components/PDFReader';
import VideoPlayer from './Pages/VideoPlayer';
import SlideShow from './Pages/SlideShow';
import SubmitCode from './Pages/SubmitCode';
import ApaItu from './Pages/ApaItu';
import Tentang from './Pages/Tentang';

export default function App() {
  return (
    <Router>
      <Authentication>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/sign-up'>
            <SignUp></SignUp>
          </Route>
          <Route path='/apa-itu'>
            <ApaItu></ApaItu>
          </Route>
          <Route path='/tentang'>
            <Tentang></Tentang>
          </Route>
          <ProtectedRoute
            exact
            path='/petunjuk'
            component={Petunjuk}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path='/kuesioner'
            component={Kuesioner}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path='/hasil'
            component={Hasil}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path='/pemilihan-materi'
            component={PemilihanMateri}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path='/beranda'
            component={Beranda}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path='/daftar-materi'
            component={DaftarMateri}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path='/daftar-sub-materi'
            component={DaftarSubMateri}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path='/sub-materi'
            component={SubMateri}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path='/daftar-evaluasi'
            component={DaftarEvaluasi}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path='/soal-evaluasi'
            component={SoalEvaluasi}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path='/hasil-evaluasi'
            component={HasilEvaluasi}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path='/function-content'
            component={FunctionContent}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path='/petunjuk-video'
            component={PetunjukVideo}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path='/pdf-reader'
            component={PDFReader}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path='/video-player'
            component={VideoPlayer}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path='/slide-show'
            component={SlideShow}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path='/submit-code'
            component={SubmitCode}
          ></ProtectedRoute>
          <Route path='*' component={() => <NotFound />} />
        </Switch>
      </Authentication>
    </Router>
  );
}
