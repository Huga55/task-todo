import React from "react";
import Tasks from "./Tasks";
import {connect} from "react-redux";
import {createTask} from "../../redux/taskForm-reducer";
import {Redirect} from "react-router-dom";
import {setSort} from "../../redux/task-reducer";

class TasksContainer extends React.Component {
    render() {
        if(!this.props.isAuth) {
            return <Redirect to="/" />
        }
        return(
            <Tasks {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.auth,
        tasks: state.taskManager.tasks,
        positionUser: state.auth.position,
    }
}

export default connect(mapStateToProps, {createTask, setSort})(TasksContainer);
