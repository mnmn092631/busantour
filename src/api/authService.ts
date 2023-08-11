import { axiosInstance } from "api";
import { JoinData, LoginData } from "types/api";

/**
 * 로그인 요청
 * @param body 로그인 하는데 필요한 데이터들(id, password)
 * @return AxiosPromise
 */
const login = (body: LoginData) => axiosInstance.post("/api/login", body);

/**
 * 회원가입 요청
 * @param body 회원가입 하는데 필요한 데이터들(id, username, password)
 * @return AxiosPromise
 */
const signup = (body: JoinData) => axiosInstance.post("/api/signup", body);

const authService = { login, signup };

export default authService;
