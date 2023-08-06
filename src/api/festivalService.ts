import { FestivalData } from "types/api";
import { axiosInstance } from "./index";

const getFestival = () => axiosInstance.get<FestivalData[]>("/busanfestival");

const getFestivalUpcoming = () => axiosInstance.get<FestivalData[]>("/busanfestival/upcoming");

const festivalService = { getFestival, getFestivalUpcoming };

export default festivalService;
