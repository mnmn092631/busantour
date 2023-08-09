import { JoinData, LoginData } from "types/api";
import { axiosInstance } from "./index";

const login = ({ id, password }: LoginData) => axiosInstance.post("/api/login", { id: id, password: password });

const signup = ({ id, username, password }: JoinData) =>
  axiosInstance.post("/api/signup", {
    id: id,
    username: username,
    password: password,
  });

const authService = { login, signup };

export default authService;
