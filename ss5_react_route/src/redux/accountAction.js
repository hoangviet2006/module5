import {checkAccount} from "../service/AccountService";
import {type} from "@testing-library/user-event/dist/type";


export function login(loginInfo) {

    // return{
    //     type: "LOGIN",
    //     payload:account
    // };
    return async (dispatch) => {
        const account = await checkAccount(loginInfo);
        if (account != null) {
            dispatch({
                type: "LOGIN",
                payload: account
            })
            return true;
        }
    }
}

export function logout() {
    return {
        type: "LOGOUT",
        payload: null
    };
}