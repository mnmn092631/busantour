import { JoinData } from "types/api";
import { postData } from ".";

const join = async ({ id, username, password }: JoinData) => {
  try {
    const response = await postData("/api/signup", {
      id: id,
      username: username,
      password: password,
    });
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to post join");
  }
};

const joinService = { join };

export default joinService;
