import Axios from "axios";
import config from "../config";

// Set config defaults when creating the instance
const Api = Axios.create({
  baseURL: config.apiUrl
});

// debugger

let token = window.localStorage.getItem("token");

if (token) {
  // Alter defaults after instance has been created
  Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default Api;
