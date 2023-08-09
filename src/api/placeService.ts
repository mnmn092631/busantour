import { axiosInstance } from "api";
import { RawPlaceData } from "types/api";

const getPlace = () => axiosInstance.get<RawPlaceData[]>("/busanplace");

const getPlaceById = (id: number) => axiosInstance.get<RawPlaceData>(`/busanplace/${id}`);

const placeService = { getPlace, getPlaceById };

export default placeService;
