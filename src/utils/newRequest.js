import axios from "axios";

const newRequest = axios.create({
  // baseURL: "http://localhost:8800/api/",
  baseURL: "https://csarta.onrender.com/api",
  // withCredentials: true,
});

export default newRequest;
