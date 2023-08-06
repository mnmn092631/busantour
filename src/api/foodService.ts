import { axiosInstance } from "api";
import { FoodData } from "types/api";

const getFood = () => axiosInstance.get<FoodData[]>("/busanfood");

const foodService = { getFood };

export default foodService;
