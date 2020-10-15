import React from "react";
import c from "./Tasks.module.css";
import TaskContainer from "./Task/TaskContainer";

const Tasks = (props) => {
    let splitTasksByStatus = (status) => {
        return props.tasks.filter(t => t.status_id === status).length;
    }
    let taskAll =  props.tasks.length;
    let taskStatus1 = splitTasksByStatus(1);
    let taskStatus2 = splitTasksByStatus(2);
    let taskStatus3 = splitTasksByStatus(3);
    let taskStatus4 = splitTasksByStatus(4);
    return(
        <>
            {props.positionUser?
            <div className="content__top">
                <button className="content__button button" onClick={() => props.createTask()}>
                    Создать новую задачу
                </button>
            </div>: ""}
            <div className="content__filters">
                <div className="content__filter button" onClick={() => props.setSort("date_end")}>По дате завершения</div>
                {props.positionUser?
                    <div className="content__filter button" onClick={() => props.setSort("user_worker_id")}>По ответственным</div>
                    : ""
                }
                <div className="content__filter button" onClick={() => props.setSort("updated_at")}>По дате (последнего обновления)</div>
            </div>
            <div className="content__block">
                <TaskContainer />
                <div className="content__info">
                    <ul className="content__list">
                        <li className="content__elem text_bold">Всего задач: {taskAll}</li>
                        <li className="content__elem">Задачи на выполнение: {taskStatus1}</li>
                        <li className="content__elem">Задачи выполняются: {taskStatus2}</li>
                        <li className="content__elem bg_green">Задачи выполнены {taskStatus3}</li>
                        <li className="content__elem bg_red">Задачи отмнены: {taskStatus4}</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Tasks;
