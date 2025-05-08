
import './App.css';
import OrderListComponent from "./component/OrderListComponent";
import {Route, Routes} from "react-router-dom";
import CreateOrderComponent from "./component/CreateOrderComponent";
import UpdateOrderComponent from "./component/UpdateOrderComponent";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <>
        <ToastContainer/>
      <Routes>
        <Route path={'/order'} element={<OrderListComponent/>}></Route>
        <Route path={'/order/create'} element={<CreateOrderComponent/>}></Route>
        <Route path={'/order/update/:id'} element={<UpdateOrderComponent/>}></Route>
      </Routes>

    </>
  );
}

export default App;
