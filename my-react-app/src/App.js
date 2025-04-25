import logo from './logo.svg';
import './App.css';

import React from "react";


import ListCityComponent from "./components/ListCityComponent";
import StudentListComponent from "./components/StudentListComponent";

function App() {

    return (
        <div className="App">
            <ListCityComponent/>
            <StudentListComponent/>
        </div>
    );
}

export default App;
