import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const HeaderComponent = () => {
    const account = useSelector((state) => state.user.account);
    console.log(account)
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Trang Chủ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Sản Phẩm</Link>
                            </li>
                        </ul>
                    </div>
                    {!account && (
                        <>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Đăng Nhập</Link>
                                </li>
                            </ul>
                        </>
                    )}
                    {account && (
                        <>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li>
                                    <span className="nav-link">Xin chào {account.username}👤</span>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">Đăng Xuất</Link>
                                </li>
                            </ul>
                        </>
                    )}

                </div>
            </nav>
        </>
    );
}
export default HeaderComponent;