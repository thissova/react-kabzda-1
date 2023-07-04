import axios from "axios";
const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "1f689808-b4f6-458e-b6ce-28ecaf3a4c6a",
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',

})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=> {return response.data})
    }, 
    follow(userId){
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

