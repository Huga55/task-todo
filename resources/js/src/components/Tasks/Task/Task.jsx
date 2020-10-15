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
    let getDifferenceDay = (date) => {
        return Math.ceil((new Date(date) - new Date ()) / (1000*3600*24));
    }

    let changeTitleClass = (date_end, status_id) => {
        if(getDifferenceDay(date_end) < 0 && status_id !== 3) {
            return "content__title content__title_error";
        }else {
            if(status_id === 3) {
                return "content__title content__title_complete";
            }else {
                return "content__title";
            }
        }
    }

    let allTasks = props.tasks;
    let dates = ["На сегодня", "На неделю", "Больше чем на неделю"];

    switch (props.sort) {
        case "date_end":
            allTasks.sort((t1, t2) => {
                if(new Date(t2[props.sort]) > new Date(t1[props.sort])) {
                    return -1;
                }
                if(new Date(t1[props.sort]) > new Date(t2[props.sort])) {
                    return 1;
                }
                return 0;
            });
            allTasks = allTasks.filter(t => getDifferenceDay(t['date_end']) >= 0);
            break;
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
    let getTimeBlock = (index) => {
        let str = dates[index].substr(0);
        dates[index] = "";
        return str;
    }
    console.log();
    return(
        <div className="content__tasks">
            {allTasks.map(t => {
                return (
                    <>
                        {
                            props.sort === "date_end" && dates[0].length > 0 && getNewDate(t.date_end) == new Date().toLocaleDateString()?
                                <div className="content__time">{getTimeBlock(0)}</div>:""
                        }

                        {
                            props.sort === "date_end" && dates[1].length > 0 && getDifferenceDay(t.date_end) >= 1 && getDifferenceDay(t.date_end) <= 7?
                                <div className="content__time">{getTimeBlock(1)}</div>:""
                        }

                        {
                            props.sort === "date_end" && dates[2].length > 0 && getDifferenceDay(t.date_end) > 7?
                                <div className="content__time">{getTimeBlock(2)}</div>:""
                        }
                    <div className="content__task" key={t.id} onClick={() => props.changeTask(t)}>
                        <div className={changeTitleClass(t.date_end, t.status_id)}>
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
                    </div></>)})}
        </div>
    );
}
export default Task;
