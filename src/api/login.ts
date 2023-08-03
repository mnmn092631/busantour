import { postData } from ".";

const login = async ({ id, password }: { id: string; password: string }) => {
  try {
    const response = await postData("/api/login", {
      id: id,
      password: password,
    });
    return response;
  } catch (error) {
    console.error("로그인 실패: ", error);
  }
};

const loginService = { login };

export default loginService;
