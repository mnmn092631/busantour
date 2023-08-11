import { axiosInstance } from "api";
import { AuthData } from "types/api";

/**
 * 로그인 요청
 * @param body 로그인 하는데 필요한 데이터들(username, password)
 * @return AxiosPromise
 */
const login = (body: AuthData) => axiosInstance.post("/login", body);

/**
 * 회원가입 요청
 * @param body 회원가입 하는데 필요한 데이터들(username, password)
 * @return AxiosPromise
 */
const signup = (body: AuthData) => axiosInstance.post("/signup", body);

const authService = { login, signup };

export default authService;
