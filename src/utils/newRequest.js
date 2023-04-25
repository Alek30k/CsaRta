import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
  //   baseURL: "https://fiverr-nlt2.onrender.com/api",
  // withCredentials: true,
});

export default newRequest;
