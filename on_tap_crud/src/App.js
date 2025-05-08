import logo from './logo.svg';
import './App.css';
import OrderList from "./component/OrderList";
import {Routes,Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import CreateOrderProduct from "./component/CreateOrderProduct";
import UpdateOrderProduct from "./component/UpdateOrderProduct";
import Top10TotalPrime from "./component/Top10TotalPrime";

function App() {
  return (
    <>
        <ToastContainer/>
        <Routes>
            <Route path={'/orderList'} element={<OrderList/>}></Route>
            <Route path={'/orderList/top10'} element={<Top10TotalPrime/>}></Route>
            <Route path={'/orderList/updateOrderProduct/:id'} element={<UpdateOrderProduct/>}></Route>
            <Route path={'/orderList/createOrderProduct'} element={<CreateOrderProduct/>}></Route>
        </Routes>
    </>
  );
}

export default App;
