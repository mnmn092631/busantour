import { LoginData } from "types/api";
import { postData } from ".";

const login = async ({ id, password }: LoginData) => {
  try {
    const response = await postData("/api/login", {
      id: id,
      password: password,
    });
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to post login");
  }
};

const loginService = { login };

export default loginService;
