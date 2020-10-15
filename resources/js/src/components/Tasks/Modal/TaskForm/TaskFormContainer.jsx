import React from "react";
import TaskForm from "./TaskFrom";
import {connect} from "react-redux";
import {changeInput, sendForm} from "../../../../redux/taskForm-reducer";

class TaskFormContainer extends React.Component {
    render() {
        return(
            <TaskForm {...this.props} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        task: state.taskForm.taskForChange,
        tasks: state.taskManager.tasks,
        priorities: state.taskForm.priorities,
        statuses: state.taskForm.statuses,
        users: state.taskForm.allUsers,
        userId: state.auth.userId,
        workers: state.taskForm.allUsers.filter(w => w['boss_id'] === state.auth.userId),
        isCreateMode: state.taskForm.isCreateMode,
        isWait: state.taskForm.isWait,
        positionUser: state.auth.position,
    }
}

export default connect(mapStateToProps, {changeInput, sendForm})(TaskFormContainer);
