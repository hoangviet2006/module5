import {useRef} from "react";
import React from "react";
import {checkAccount} from "../service/AccountService";
import {login} from "../redux/accountAction";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {ErrorMessage} from "formik";

const LoginComponent = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        const account = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }
        const check = await dispatch(login(account))
        if (check){
            navigate('/products');
            toast.success('Đăng Nhập Thành Công!')
        }else {
            navigate('/login');
            toast.error('Đăng Nhập Thất Bại!');
        }
        // const check = await checkAccount(account);
        // if (check) {
        //     dispatch(login(check));
        //     navigate('/products');
        //     toast.success('Đăng Nhập Thành Công!')
        //     console.log("username: " + check.username + "------" + "username: " + check.password+ "------" +"role: "+check.role)
        // } else {
        //     navigate('/login');
        //     toast.error('Đăng Nhập Thất Bại!');
        // }

    }
    return (
        <>
            <h2>Đăng Nhập</h2>
            <form>
                <label>Tài Khoản</label>
                <input ref={usernameRef} name={'username'}/>
                <label>Mật Khẩu</label>
                <input ref={passwordRef} name={'password'} type={'password'}/>
                <button type={'button'} onClick={handleLogin}>Đăng Nhập</button>
            </form>
        </>
    );
}
export default LoginComponent;