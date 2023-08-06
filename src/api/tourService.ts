import { axiosInstance } from "api";
import { TourData, TourTagsData } from "types/api";

const getTour = () => axiosInstance.get<TourData[]>("/busantour");

const getTourTags = () => axiosInstance.get<TourTagsData[]>("/tourtagtop15");

const tourService = { getTour, getTourTags };

export default tourService;
