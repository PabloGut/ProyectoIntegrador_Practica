import axios from "axios";

const mockAPI = axios.create({
    baseURL: "https://6acba9e3ef37b15040781c5b.mockapi.io", // Replace with your API base URL
})

export default mockAPI;