import { axiosInstance } from "api";
import { PlaceData } from "types/api";

const getPlace = () => axiosInstance.get<PlaceData[]>("/busanplace");

const getPlaceById = (id: number) => axiosInstance.get<PlaceData>(`/busanplace/${id}`);

const placeService = { getPlace, getPlaceById };

export default placeService;
