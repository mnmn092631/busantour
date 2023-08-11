import { axiosInstance } from "api";
import { RawPlaceData } from "types/api";

/**
 * Place 전체 리스트 요청
 * @return AxiosPromise
 */
const getPlace = () => axiosInstance.get<RawPlaceData[]>("/busanplace");

const placeService = { getPlace };

export default placeService;
