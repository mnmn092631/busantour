import { JoinData, LoginData } from "types/api";
import { axiosInstance } from "./index";

const login = ({ id, password }: LoginData) => axiosInstance.post("/api/login", { id, password });

const signup = ({ id, username, password }: JoinData) => axiosInstance.post("/api/signup", { id, username, password });

const authService = { login, signup };

export default authService;
