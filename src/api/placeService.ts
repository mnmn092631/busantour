import { PlaceData } from "types/api";
import { getData } from ".";

const getPlace = async () => {
  try {
    const response: PlaceData[] = await getData<PlaceData[]>("/busanplace");
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get place");
  }
};

const getPlaceById = async (id: number) => {
  try {
    const response: PlaceData = await getData<PlaceData>(`/busanplace/${id}`);
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get place by id");
  }
};

const placeService = { getPlace, getPlaceById };

export default placeService;
