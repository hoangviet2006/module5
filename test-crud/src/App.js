import logo from './logo.svg';
import './App.css';

import ShowStudent from "./components/ShowStudent"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import TestInput from "./test/TestInput";
import Clock from "./test/Clock";
import ListStudent from './components/ListStudentComponent'
function App() {
  return (
      <div className="App">
        {/*<Navbar/>*/}
        {/*<div className={'content'}>*/}
        {/*  <ShowStudent/>*/}
        {/*</div>*/}
        {/*<Footer/>*/}
        {/*  <TestInput/>*/}
        {/*  <Clock/>*/}
        <ListStudent/>
      </div>
  );
}

export default App;
