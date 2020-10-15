
const SET_USER_TASKS = "SET_USER_TASKS";
const SET_SORT = "SET_SORT";

const initialState = {
    tasks: [
        {id:1, title: "Task 1", describe: "Work work work", date_end: "20.10.2020",
            created_at: "10.10.2020", updated_at: "15.10.2020", priority: 3,
            status_id: 2, userCreator:"admin1", user_creator_id: 1, userWorker:"User1", user_worker_id: 4,},
        {id:2, title: "Task 15", describe: "Work worxvmbcv,io342k work", date_end: "20.10.2020",
            created_at: "10.10.2020", updated_at: "15.10.2020", priority: 2,
            status_id: 3, userCreator:"admin3", user_creator_id: 3, userWorker:"User1", user_worker_id: 4,},
        {id:3, title: "Task 19", describe: "Worsgffgk work work", date_end: "20.10.2020",
            created_at: "10.10.2020", updated_at: "15.10.2020", priority_id: 3,
            status_id: 1, userCreator:"admin2", user_creator_id: 2, userWorker:"User2", user_worker_id: 5,},
    ],
    sort: false,
    sortDirection: false,
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_TASKS:
            return {
                ...state,
                tasks: action.tasks,
            }
        case SET_SORT:
            return {
                ...state,
                sort: action.sortProp,
                sortDirection: !state.sortDirection,
            }
        default:
            return state;
    }
}

export const setUserTasks = (tasks) => ({type: SET_USER_TASKS, tasks});
export const setSort = (sortProp) => ({type: SET_SORT, sortProp});

export default taskReducer;
