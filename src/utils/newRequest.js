import axios from "axios";

const newRequest = axios.create({
  // baseURL: "http://localhost:8800/api/",
  baseURL: "https://csarta-f69m21fza-alek30k.vercel.app/api",
  withCredentials: true,
});

export default newRequest;
