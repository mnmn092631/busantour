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

const getFestivalUpcoming = async () => {
  try {
    const response: FestivalData[] = await getData<FestivalData[]>("/busanfestival/upcoming");
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get festival upcoming");
  }
};

const festivalService = { getFestival, getFestivalUpcoming };

export default festivalService;
