import {appAPI, usersAPI} from "../components/api/api";
import {setAllUsers, setPriorities, setStatuses, setWorkers} from "./taskForm-reducer";
import {setUserTasks} from "./task-reducer";

const SET_APP_READY = "SET_APP_READY";
const DELETE_APP_READY = "DELETE_APP_READY";

const initialState = {
    isReadyApp: false,
}

const initializeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_APP_READY:
            return {
                ...state,
                isReadyApp: true,
            }
        case DELETE_APP_READY:
            return {
                ...state,
                isReadyApp: false,
            }
        default:
            return state
    }
}

export const setAppReady = () => ({type: SET_APP_READY});
export const deleteAppReady = () => ({type: DELETE_APP_READY});

export const initializeApp = () => (dispatch) => {
    usersAPI.getWorkers()
        .then(response => {
            dispatch(setWorkers(response.workers));
            return usersAPI.getTasks();
        })
        .then(response => {
            dispatch(setUserTasks(response.tasks));
            return appAPI.getStatuses();
        })
        .then(response => {
            dispatch(setStatuses(response.statuses));
            return appAPI.getPriorities();
        })
        .then(response => {
            dispatch(setPriorities(response.priorities));
            return appAPI.getAllUsers();
        })
        .then(response => {
            dispatch(setAllUsers(response.users));
            dispatch(setAppReady());
        });
}

export default initializeReducer;
