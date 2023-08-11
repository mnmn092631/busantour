import { axiosInstance } from "api";
import { RawFoodData } from "types/api";

/**
 * Food 전체 리스트 요청
 * @return AxiosPromise
 */
const getFood = () => axiosInstance.get<RawFoodData[]>("/busanfood");

const foodService = { getFood };

export default foodService;
