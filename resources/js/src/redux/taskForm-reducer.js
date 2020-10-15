import {taskAPI, usersAPI} from "../components/api/api";
import {setUserTasks} from "./task-reducer";

const SET_WORKERS = "GET_WORKERS";
const SET_STATUSES = "SET_STATUSES";
const SET_PRIORITIES = "SET_PRIORITIES";
const SET_ALL_USERS = "SET_ALL_USERS";
const CHANGE_TASK = "CHANGE_TASK";
const DEACTIVE_TASK_FORM = "DEACTIVE_TASK_FORM";
const CHANGE_INPUT = "CHANGE_INPUT";
const CREATE_TASK = "CREATE_TASK";
const SET_WAIT = "SET_WAIT";
const DELETE_WAIT = "DELETE_WAIT";

let initialState = {
    isActive: false,
    isCreateMode: false,
    taskForChange: null,
    taskTemplate: {id:1, title: "", describe: "", date_end: "",
        dateCreate: "", date_update: "", priority_id: 1,
        status_id: 1, user_creator_id:"", user_worker_id: ""},
    priorities: [{id: 1, name: "Низки"},
                {id: 2, name: "Средний"},
                {id: 3, name: "Высокий"}],
    statuses: [{id: 1, name: "К выполнению"}, {id: 2, name: "Выполняется",},
                {id: 3, name: "Выполнена"}, {id: 4, name: "Отменена"}],
    allUsers: [{id:1, name: "user1"}, {id: 3, name: "user2"}, {id: 4, name: "user3"}],
    isWait: false,
}

const taskFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case DEACTIVE_TASK_FORM:
            return {
                ...state,
                isActive: false,
                isCreateMode:false,
            }
        case CHANGE_TASK:
            return {
                ...state,
                taskForChange: action.task,
                isActive: true,
            }
        case CHANGE_INPUT:
            let newValue = {...state.taskForChange};
            newValue[action.inputName] = action.inputValue;
            return {
                ...state,
                taskForChange:newValue,
            }
        case CREATE_TASK:
            return {
                ...state,
                taskForChange: {...state.taskTemplate},
                isActive: true,
                isCreateMode:true,
            }
        case SET_WORKERS:
            return {
                ...state,
                allUsers: action.workers,
            }
        case SET_STATUSES:
            return {
                ...state,
                statuses: action.statuses,
            }
        case SET_PRIORITIES:
            return {
                ...state,
                priorities: action.priorities,
            }
        case SET_ALL_USERS:
            return {
                ...state,
                allUsers: action.allUsers,
            }
        case SET_WAIT:
            return {
                ...state,
                isWait: true,
            }
        case DELETE_WAIT:
            return {
                ...state,
                isWait: false,
            }
        default:
            return state
    }
}

export const setWorkers = (workers) => ({type: SET_WORKERS, workers});
export const setStatuses = (statuses) => ({type: SET_STATUSES, statuses});
export const setPriorities = (priorities) => ({type: SET_PRIORITIES, priorities});
export const setAllUsers = (allUsers) => ({type: SET_ALL_USERS, allUsers});

export const changeTask = (task) => ({type: CHANGE_TASK, task});
export const deactiveTaskFrom = () => ({type: DEACTIVE_TASK_FORM});
export const changeInput = (inputName, inputValue) => ({type: CHANGE_INPUT, inputName, inputValue});
export const createTask = () => ({type: CREATE_TASK});
export const setWait = () => ({type: SET_WAIT});
export const deleteWait = () => ({type: DELETE_WAIT});

export const sendForm = (task, createMode, userId) => (dispatch) => {
    dispatch(setWait());
    if(createMode) {
        task['user_creator_id'] = userId;
        taskAPI.sendNewTask(task)
            .then(response => {
                dispatch(deleteWait());
                updateTasks(dispatch);
            });
    }else {
        taskAPI.changeTask(task)
            .then(response => {
                dispatch(deleteWait());
                updateTasks(dispatch);
            });
    }
    let updateTasks = (dispatch) => {
        usersAPI.getTasks()
            .then(response => {
                dispatch(setUserTasks(response.tasks));
            });
    }
}

export default taskFormReducer;
