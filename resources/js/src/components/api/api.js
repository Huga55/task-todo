import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "http://task-todo-my-project.herokuapp.com/api/",
    headers: {
        Authorization: "Bearer " + localStorage.getItem('token'),
    }
})

export const appAPI = {
    getStatuses() {
        return instance.get("app/statuses")
            .then(response => response.data);
    },
    getPriorities() {
        return instance.get("app/priorities")
            .then(response => response.data);
    },
    getAllUsers() {
        return instance.get("app/users")
            .then(response => response.data);
    },
}

export const usersAPI = {
    checkUser() {
        return instance.get("auth/me")
            .then(response => response.data);
    },
    loginUser({login, password}) {
        return instance.post("auth/login", {login, password})
            .then(response => response.data);
    },
    logoutUser(userId) {
        return instance.delete("auth/logout/" + userId)
            .then(response => response.data);
    },
    getUserInfo() {
        return instance.get("auth/user")
            .then(response => response.data);
    },
    getWorkers() {
        return instance.get("user/workers")
            .then(response => response.data);
    },
    getTasks() {
        return instance.get("user/tasks")
            .then(response => response.data);
    },
}

export const taskAPI = {
    sendNewTask(data) {
        return instance.post("task/create/",  {data: data})
            .then(response => response.data);
    },
    changeTask(data) {
        return instance.put("task/change", {data: data})
            .then(response => response.data);
    }
}
