import logo from './logo.svg';
import './App.css';
import Welcome from './components/thuc_hanh/Welcome'
import AddComponentFunction from "./components/thuc_hanh/AddComponentFunction";
import AddComponentClass from "./components/thuc_hanh/AddComponentClass";
import IncreaseOrDecrease from "./components/thuc_hanh/IncreaseOrDecrease";
import BackgroundColor from "./components/thuc_hanh/BackgroundColor";
import DeleteComponent from "./components/thuc_hanh/DeleteComponent";
import ListStudentComponent  from "./components/bai_tap/student/ListStudentComponent";
import TodoApp from "./components/bai_tap/todoApp/todoApp";
import FormLogin from "./components/bai_tap/login/FormLogin";
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
            <TodoApp/>
            <FormLogin/>
        </div>
    );
}

export default App;
