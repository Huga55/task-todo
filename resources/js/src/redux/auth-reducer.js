import {usersAPI} from "../components/api/api";
import {deleteAppReady} from "./initialize-reducer";
import {stopSubmit} from "redux-form";

const UPDATE_AUTH = "UPDATE_AUTH";
const DELETE_AUTH = "DELETE_AUTH";
const SET_ERROR_PASSWORD = "SET_ERROR_PASSWORD";

const initialState = {
    auth: null,
    position: null,
    userId: null,
    name: null,
    surname: null,
    patronymic: null,
    login: null,
    errorPassword: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_AUTH:
            return {
                ...state,
                auth: true,
                position: action.data.status,
                userId: action.data.id,
                name: action.data.name,
                surname: action.data.surname,
                patronymic: action.data.patronymic,
                login: action.data.login,
            }
        case DELETE_AUTH:
            return {
                ...state,
                auth: false,
                position: null,
                userId: null,
                name: null,
                surname: null,
                patronymic: null,
                login: null,
            }
        case SET_ERROR_PASSWORD:
            return {
                ...state,
                errorPassword: action.text,
            }
        default:
            return state
    }
}

export const updateAuth = (data) => ({type: UPDATE_AUTH, data});
export const deleteAuth = () => ({type: DELETE_AUTH});
export const setErrorPassword = (text) => ({type: SET_ERROR_PASSWORD, text});

export const checkUser = () => (dispatch) => {
    return usersAPI.checkUser()
        .then(response => {
            if(response.result) {
                dispatch(updateAuth(response.result));
            }else {
                dispatch(deleteAuth());
                dispatch(deleteAppReady());
            }
        })
        .catch(error => console.log("Ajax error: " + error));
}

export const loginUser = (data) => (dispatch) => {
    dispatch(setErrorPassword(null));
    usersAPI.loginUser(data)
        .then(response => {
            localStorage.setItem('token', response.token);
            console.log(response);
            if(response.result) {
                location.reload();
            }else {
                dispatch(stopSubmit('login', {login: response.text, password:" "}));
            }
        })
        .catch(error => console.log("Ajax error: " + error));
}

export const logoutUser = (userId) => (dispatch) => {
    usersAPI.logoutUser(userId)
        .then(response => {
            localStorage.removeItem("token");
            dispatch(deleteAuth());
            location.reload();
        })
        .catch(error => console.log("Ajax error: " + error));
}

export default authReducer;
