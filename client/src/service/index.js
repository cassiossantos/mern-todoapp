import axios from "axios";
import { BASE_URL } from "./config";

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 2000
});

const getTodo = () => api.get("/todo");
const createTodo = payload => api.post("/todo", payload);
const editTodo = payload => api.put("/todo/" + encodeURI(payload.id), payload);
const deleteTodo = id => api.delete("/todo/" + encodeURI(id));

export default { getTodo, createTodo, editTodo, deleteTodo };
