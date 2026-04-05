import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_RESUME_API_URL
});

export default api;