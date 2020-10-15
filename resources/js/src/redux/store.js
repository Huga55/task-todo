import {applyMiddleware, combineReducers, createStore} from "redux";
import taskReducer from "./task-reducer";
import taskFormReducer from "./taskForm-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import authReducer from "./auth-reducer";
import initializeReducer from "./initialize-reducer";

let reducers = combineReducers({
    taskManager: taskReducer,
    taskForm: taskFormReducer,
    auth: authReducer,
    form: formReducer,
    initialize:initializeReducer,
});

let store = createStore(reducers, applyMiddleware( thunkMiddleware ));

export default store;
