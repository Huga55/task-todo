import React from "react";
import {connect} from "react-redux";
import Task from "./Task";
import {changeTask} from "../../../redux/taskForm-reducer";

class TaskContainer extends React.Component {
    render() {
        return(
            <Task {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        tasks: state.taskManager.tasks,
        priorities: state.taskForm.priorities,
        statuses: state.taskForm.statuses,
        users: state.taskForm.allUsers,
        sort: state.taskManager.sort,
        sortDirection: state.taskManager.sortDirection,
    }
}

export default connect(mapStateToProps, {changeTask})(TaskContainer);
