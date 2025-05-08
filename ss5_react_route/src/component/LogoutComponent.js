import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/accountAction";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const LogoutComponent = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const account = useSelector((state) =>  state.user.account);
    useEffect(()=>{
        if (account){
            dispatch(logout(account));
            navigate('/login')
            toast.error("Đăng Xuất Thành Công!");
        }
    },[])



}
export default LogoutComponent;