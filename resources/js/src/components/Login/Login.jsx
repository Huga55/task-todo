import React from "react";
import c from "./Login.module.css";
import LoginForm from "./LoginForm/LoginForm";

const Login = (props) => {
    let onSubmit = (formData) => {
        props.loginUser(formData);
    }
    return(
        <div className="login">
            <div className="login__window">
                <h2 className="login__title">
                   Вход
                </h2>
                <LoginForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
}

export default Login;
