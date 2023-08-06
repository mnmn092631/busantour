import { JoinData } from "types/api";
import { axiosInstance } from "./index";

const join = ({ id, username, password }: JoinData) =>
  axiosInstance.post("/api/signup", {
    id: id,
    username: username,
    password: password,
  });

const joinService = { join };

export default joinService;
