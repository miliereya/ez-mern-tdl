import axios from "axios"

export const tasksAPI = {
    createTask(task) {
        return axios.post('http://localhost:5000/tasks/add', task)
        .then(res => res.data)
    },
    getTasks(username) {
        return axios.get(`http://localhost:5000/tasks?username=${username}`)
        .then(res => res.data)
    },
    deleteTask(id) {
        axios.delete('http://localhost:5000/tasks/delete' + id)
    }
}