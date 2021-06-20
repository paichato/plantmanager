import axios from "axios";

const api=axios.create({
    baseURL:'http://192.168.43.10:3333'
})


export default api;