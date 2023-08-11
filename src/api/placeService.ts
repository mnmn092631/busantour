import { axiosInstance } from "api";
import { RawPlaceData } from "types/api";

const getPlace = () => axiosInstance.get<RawPlaceData[]>("/busanplace");

const placeService = { getPlace };

export default placeService;
