import React from "react";
import c from "./Task.module.css";

const Task = (props) => {
    let getNewDate = (date) => {
        let newDate = date.slice(0, 10).split("-").reverse().join(".");
        return newDate;
    }
    let getUserFullName = (id) => {
        let user = props.users.filter(u => id === u.id)[0];
        return user.surname + " " + user.name;
    }
    let allTasks = props.tasks;

    switch (props.sort) {
        case "date_end":
        case "updated_at":
            if(props.sortDirection) {
                allTasks.sort((t1, t2) => new Date(t2[props.sort]) - new Date(t1[props.sort]));
            }else {
                allTasks.sort((t1, t2) => new Date(t1[props.sort]) - new Date(t2[props.sort]));
            }
            break;
        case "user_worker_id":
            allTasks.sort((t1, t2) => {
                let surnameA = props.users.filter(u => u.id == t2[props.sort])[0].surname;
                let surnameB = props.users.filter(u => u.id == t1[props.sort])[0].surname;
                if(props.sortDirection) {
                    if(surnameA > surnameB) {
                        return -1;
                    }
                    if(surnameB > surnameA) {
                        return 1;
                    }
                    return 0;
                }else {
                    if(surnameA > surnameB) {
                        return 1;
                    }
                    if(surnameB > surnameA) {
                        return -1;
                    }
                    return 0;
                }
            })
        default:
            break;
    }
    return(
        <div className="content__tasks">
            {allTasks.map(t => <div className="content__task" key={t.id} onClick={() => props.changeTask(t)}>
                    <div className={new Date() > new Date(t.date_end) && t.status_id !== 3? "content__title content__title_error" : "content__title"}>
                        {t.title}
                    </div>
                    <div className="content__priority">
                        Приоритет: {props.priorities[t.priority_id - 1].name}
                    </div>
                    <div className="content__date-end">
                        Дата окончания: {getNewDate(t.date_end)}
                    </div>
                    <div className="content__worker">
                        <div>Исполнитель:</div>
                        { getUserFullName(t.user_worker_id) }
                    </div>
                    <div className="content__status">
                        Статус: {props.statuses[t.status_id - 1].name}
                    </div>
                </div>)}
        </div>
    );
}
export default Task;
