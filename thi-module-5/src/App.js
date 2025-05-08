import {ToastContainer} from "react-toastify";
import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import SpotifyListComponent from "./component/SpotifyListComponent";
import CreateSpotify from "./component/CreateSpotify";

function App() {
  return (
    <>
      <ToastContainer/>
      <Routes>
        <Route path={'/spotify'} element={<SpotifyListComponent/>}></Route>
        <Route path={'/spotify/create'} element={<CreateSpotify/>}></Route>
      </Routes>
    </>
  );
}

export default App;
