import { postData } from ".";

const join = async ({ id, username, password }: { id: string; username: string; password: string }) => {
  try {
    const response = await postData("/api/signup", {
      id: id,
      username: username,
      password: password,
    });
    return response;
  } catch (error) {
    console.error("회원가입 실패: ", error);
  }
};

const joinService = { join };

export default joinService;
