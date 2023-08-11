import { RawTourData } from "types/api";
import { axiosInstance } from "./index";

/**
 * Tour 전체 리스트 요청
 * @return AxiosPromise
 */
const getTour = () => axiosInstance.get<RawTourData[]>("/busantour");

/**
 * Tour 전체 태그 요청
 * @return AxiosPromise
 */
const getTourTags = () => axiosInstance.get<string[]>("/tourtags");

const authService = { getTour, getTourTags };

export default authService;
