import { axiosInstance } from "api";
import { LoginData } from "types/api";

const login = ({ id, password }: LoginData) => axiosInstance.post("/api/login", { id: id, password: password });

const loginService = { login };

export default loginService;
