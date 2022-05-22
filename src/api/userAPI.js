import axios from "axios"

export const userAPI = { 
    createUser(user){
        return axios.post('http://localhost:5000/users/add', user)
        .then(res => res.data)
    },
    getUsers(username=''){
        return axios.get(`http://localhost:5000/users?username=${username}`)
        .then(res => res.data)
    },
    logByHash(hash) {
        return axios.get(`http://localhost:5000/users/hashlog?lightHash=${hash}`)
        .then(res => res.data)
    },
    log(user) {
        return axios.post(`http://localhost:5000/users/log`, user)
        .then(res => res.data)
    }
}