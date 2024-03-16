import {
    SUCCESS_SIGN_UP,
    SUCCESS_LOGIN,
    SUCCESS_LOGOUT,
    SET_USER
} from "../action/actionType"


const initialAuthState = {
    isSignUpSuccess: false,
    isLoginSuccess: false,
    isLogout: false,
    token: null,
    user: null,
};

export default function auth(state = initialAuthState, action) {

    switch (action.type) {
        case SUCCESS_SIGN_UP:
            return {
                ...state,
                isSignUpSuccess: action.data.isSignUpSuccess,
            }

        case SUCCESS_LOGIN:
            // { console.log("action=", action) }
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess,
                user: action.data.user,
            }

        case SUCCESS_LOGOUT:
            return {
                ...state,
                isLogout: action.data.isLogout,
                user: action.data.user,
                isLoginSuccess: false,
                isSignUpSuccess: false,
            }

        case SET_USER:
            return {
                ...state,
                user: action.data.user
            }

        default:
            return state;
    }

}