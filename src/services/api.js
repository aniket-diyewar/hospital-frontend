import axios from "axios";

const API = axios.create({
  baseURL: "https://hospital-backend-v4o4.onrender.com"
});

export default API;