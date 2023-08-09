import { axiosInstance } from "api";
import { RawFoodData } from "types/api";

const getFood = () => axiosInstance.get<RawFoodData[]>("/busanfood");

const foodService = { getFood };

export default foodService;
