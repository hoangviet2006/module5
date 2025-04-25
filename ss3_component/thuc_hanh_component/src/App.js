import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import AddComponentFunction from "./components/AddComponentFunction";
import AddComponentClass from "./components/AddComponentClass";
import IncreaseOrDecrease from "./components/IncreaseOrDecrease";
import BackgroundColor from "./components/BackgroundColor";
import DeleteComponent from "./components/DeleteComponent";
import ListStudentComponent  from "./components/student/ListStudentComponent";
function App() {
    return (
        <div className="App">
            {/*<Welcome name={'Hoàng Việt'}/>*/}
            {/*<AddComponentFunction firstNumber={7} secondNumber={9}/>*/}
            {/*<AddComponentClass firstNumber={7} secondNumber={9}/>*/}
            {/*<IncreaseOrDecrease/>*/}
            {/*<BackgroundColor/>*/}
            {/*<DeleteComponent/>*/}

            <ListStudentComponent/>
        </div>
    );
}

export default App;
