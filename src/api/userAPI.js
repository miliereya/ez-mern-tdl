import axios from "axios"

export const userAPI = { 
    createUser(user){
        axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data))
    },
    getUsers(username=''){
        return axios.get(`http://localhost:5000/users?username=${username}`)
        .then(res => res.data)
    }
}