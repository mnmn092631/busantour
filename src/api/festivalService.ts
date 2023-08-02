import { FestivalData } from "src/types/api";
import { getData } from ".";

const getFestival = async () => {
  try {
    const response: FestivalData[] = await getData<FestivalData[]>("/busanfestival");
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get festival");
  }
};

const festivalService = { getFestival };

export default festivalService;
