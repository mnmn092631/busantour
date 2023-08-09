import { RawFestivalData } from "types/api";
import { axiosInstance } from "./index";

const getFestival = () => axiosInstance.get<RawFestivalData[]>("/busanfestival");

const getFestivalUpcoming = () => axiosInstance.get<RawFestivalData[]>("/busanfestival/upcoming");

const festivalService = { getFestival, getFestivalUpcoming };

export default festivalService;
