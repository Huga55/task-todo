import React from "react";
import c from "./TaskForm.module.css";
import Preloader from "../../../Preloader/Preloader";

const TaskForm = (props) => {
    let getNewDate = (date) => {
        if(!date) {
            date = new Date();
            return (date.getDate() < 10? "0" + date.getDate() : date.getDate()) + "." +
                (date.getMonth() < 10? "0" + date.getMonth() : date.getMonth())
                + "." + date.getFullYear();
        }
        let newDate = date.slice(0, 10).split("-").reverse().join(".");
        return newDate;
    }
    let getUserFullName = (id) => {
        let user = props.users.filter(u => id === u.id)[0];
        if(!user) {
            return;
        }
        return user.surname + " " + user.name;
    }
    let submitForm = (e) => {
        e.preventDefault();
        let values = props.task;
        if(values.title && values.describe && values["date_end"]) {
            props.sendForm(props.task, props.isCreateMode, props.userId);
        }
    }
    if(!props.task) return "";
    return(
        <form className="modal__form" onSubmit={submitForm}>
            <div className={props.isWait? "modal__preloader modal__preloader_active" : "modal__preloader"}>
                <Preloader />
            </div>
            <div className="modal__top">
                {props.positionUser?
                <div className="modal__inputs">
                    Заголовок:
                    <input className="modal__input input" type="text" name="title"
                           value={props.task.title}
                            onChange={(e) => props.changeInput(e.target.name, e.target.value)}/>
                        Описание:
                        <textarea name="describe"
                                  className="modal__input modal__textarea input" value={props.task.describe}
                                  onChange={(e) => props.changeInput(e.target.name, e.target.value)}/>
                        Дата окончания:
                        <input className="modal__input input" type="text" name="date_end"
                               value={props.task.date_end? getNewDate(props.task.date_end) : ""}
                               onChange={(e) => props.changeInput(e.target.name, e.target.value)}/>
                </div>:
                    <div className="modal__inputs">
                        Заголовок:
                        <div className="modal__title">{props.task.title}</div>
                        Описание:
                        <div className="modal__describe">{props.task.describe}</div>
                        Дата окончания:
                        <div className="modal__date-end">{getNewDate(props.task.date_end)}</div>
                    </div>
                }
                <div className="modal__worker">
                    Исполнитель:
                    {props.positionUser ?
                        <select className="modal__select" name="user_worker_id"
                                value={props.task.user_worker_id ? props.task.user_worker_id : 0}
                                onChange={(e) => props.changeInput(e.target.name, e.target.value)}>
                            <option value="0" className="modal__option"/>
                            {props.workers.map(u =>
                                <option key={u.id} value={u.id} className="modal__option">{u.name}</option>)}
                        </select>:
                        <span>{getUserFullName(props.task.user_worker_id)}</span>
                    }
                </div>

            </div>
            <div className="modal__subtitle">
                Приоритет задачи:
            </div>
            <div className="modal__priority">
                {props.positionUser ?

                        props.priorities.map(p =>
                            <label key={p.id} htmlFor={"priority-" + p.id} className="modal__label">
                                <input type="radio" name="priority_id" id={"priority-" + p.id} value={p.id}
                                       className="modal__radio-priority"
                                       checked={p.id == props.task.priority_id}
                                       onChange={(e) => props.changeInput(e.target.name, e.target.value)}/>
                                <span className="modal__name">{p.name}</span>
                            </label>)
                    :
                    <div className="modal__priority-text">{props.priorities[props.task.priority_id - 1].name}</div>
                }
            </div>
            <div className="modal__subtitle">
                Статус задачи:
            </div>
            <div className="modal__status">
                {props.statuses.map(s =>
                    <label key={s.id} htmlFor={"status-" + s.id}  className="modal__label">
                        <input type="radio" name="status_id" id={"status-" + s.id}  className="modal__radio-status"
                               value={s.id} checked={s.id == props.task.status_id}
                               onChange={(e) => props.changeInput(e.target.name, e.target.value)}/>
                        <span className="modal__name">{s.name}</span>
                    </label>)}
            </div>
            <div className="modal__bottom">
                <div className="modal__users">
                    <div className="modal__creator">Создатель:
                        {props.task.user_creator_id? getUserFullName(props.task.user_creator_id) : getUserFullName(props.userId)}</div>
                    <div className="modal__date-create">Дата создания: {getNewDate(props.task.created_at)}</div>
                    <div>Дата последнего обновления: {getNewDate(props.task.updated_at)}</div>
                </div>
                <button className="modal__button button" disabled={props.isWait}>
                    Внести Изменения
                </button>
            </div>
        </form>
    );
}

export default TaskForm;

