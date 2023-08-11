import { RawFestivalData } from "types/api";
import { axiosInstance } from "./index";

/**
 * Festival 전체 리스트 요청
 * @return AxiosPromise
 */
const getFestival = () => axiosInstance.get<RawFestivalData[]>("/busanfestival");

/**
 * 앞으로 가장 가까운 Festival 4개 요청
 * @return AxiosPromise
 */
const getFestivalUpcoming = () => axiosInstance.get<RawFestivalData[]>("/busanfestival/upcoming");

const festivalService = { getFestival, getFestivalUpcoming };

export default festivalService;
