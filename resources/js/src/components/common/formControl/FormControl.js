import React from "react";
import c from "./formControl.module.css";

export const Input = ({input, meta, ...props}) => {
    let isError = meta.touched && meta.error;
    return(
        <div className="wrapper">
            <input {...input} {...props} className={isError? "login__input input input_error" : "login__input input"}/>
            {
                isError && <span className="form__error">{isError}</span>
            }
        </div>
    );
}
