import { TourData } from "types/api";
import { axiosInstance } from "./index";

const getTour = () => axiosInstance.get<TourData[]>("/busantour");

const getTourTags = () => axiosInstance.get<string[]>("/tourtags");

const authService = { getTour, getTourTags };

export default authService;
