import React from "react";

export const required = (value) => {
    return value ? undefined : "Обязательное поле";
}
