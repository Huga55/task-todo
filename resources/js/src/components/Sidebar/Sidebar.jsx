import React from "react";
import c from "./Sidebar.module.css";
import logo from "../../img/logo.png";

const Sidebar = (props) => {
    return(
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={logo} alt="logotype" className="sidebar__logo" />
            </div>
            <div className="info">
                <div>
                    <div className="info__name">
                        {props.surname + " " + props.name}
                    </div>
                    <div className="info__email">
                        Логин: {props.login}
                    </div>
                </div>
            </div>
            <ul className="sidebar__list">
                <li className="sidebar__elem">
                    Информация
                </li>
                <li className="sidebar__elem">
                    Список задач
                </li>
            </ul>
            <span className="logout" onClick={() => props.logoutUser(props.userId)}>Выйти</span>
        </div>
    );
}

export default Sidebar;
