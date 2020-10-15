import React from "react";
import c from "./Modal.module.css";
import TaskFormConatainer from "./TaskForm/TaskFormContainer";

const Modal = (props) => {
    return(
        <div className={props.isActive? "modal modal_active" : "modal"}>
            <div className={props.isActive? "modal__bg modal__bg_active" : "modal__bg"}
                 onClick={() => props.deactiveTaskFrom()} />
            <div className={props.isActive? "modal__window modal__window_active" : "modal__window"}>
                <div className="modal__change change">
                    <div className="modal__title">
                        Изменение задачи
                    </div>
                    <TaskFormConatainer />
                </div>
            </div>
        </div>
    );
}

export default Modal;
