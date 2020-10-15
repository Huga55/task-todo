import React from "react";
import c from "./LoginForm.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/formControl/FormControl";
import {required} from "../../../utils/validators/validators";

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Input} validate={[required]} type="text" name="login" placeholder="Введите логин"/>
            <Field component={Input} validate={[required]} type="password" name="password" placeholder="Введите пароль"/>
            <button className="login__button button">Войти</button>
        </form>
    );
}

export default reduxForm({form: 'login'})(LoginForm);
