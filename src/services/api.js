import axios from "axios";

const api = axios.create({
  baseURL: "https://plants-server-list.herokuapp.com/",
});

export default api;
