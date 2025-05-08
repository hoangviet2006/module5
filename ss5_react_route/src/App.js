import './App.css';
import HeaderComponent from "./component/HeaderComponent";
import React from "react";
import ProductListComponent from "./component/ProductListComponent";
import {Routes, Route} from "react-router-dom"
import HomeComponent from "./component/HomeComponent";
import CreateProductComponent from "./component/CreateProductComponent";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import DetailProduct from "./component/DetailProduct";
import UpdateProduct from "./component/UpdateProduct";
import LoginComponent from "./component/LoginComponent";
import LogoutComponent from "./component/LogoutComponent";

function App() {
    return (
        <>
            <ToastContainer/>
            <HeaderComponent/>
            <Routes>
                <Route path={'/products'} element={<ProductListComponent/>}></Route>
                <Route path={'/login'} element={<LoginComponent/>}></Route>
                <Route path={'/logout'} element={<LogoutComponent/>}></Route>
                <Route path={'/products/create'} element={<CreateProductComponent/>}></Route>
                <Route path={'/products/detail/:id'} element={<DetailProduct/>}></Route>
                <Route path={'/products/update/:id'} element={<UpdateProduct/>}></Route>
                <Route path={'/home'} element={<HomeComponent/>}></Route>
            </Routes>
        </>
    );
}

export default App;
