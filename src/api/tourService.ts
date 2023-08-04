import { TourData, TourTagsData } from "types/api";
import { getData } from ".";

const getTour = async () => {
  try {
    const response: TourData[] = await getData<TourData[]>("/busantour");
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get tour");
  }
};

const getTourTags = async () => {
  try {
    const response: TourTagsData[] = await getData<TourTagsData[]>("/tourtagtop15");
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get tour tags");
  }
};

const tourService = { getTour, getTourTags };

export default tourService;
