import { FoodData } from "src/types/api";
import { getData } from ".";

const getFood = async () => {
  try {
    const response: FoodData[] = await getData<FoodData[]>("/busanfood");
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get food");
  }
};

const foodService = { getFood };

export default foodService;
