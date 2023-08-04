import { FoodData, PlaceData } from "./api";

export interface PageTitleProps {
  pageName: string;
  imgSrc: string;
  imgName: string;
}

export interface CategorySelectProps {
  categories: string[];
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

export interface CardProps {
  item: PlaceData | FoodData;
  selectedStateId: number;
  setSelectedStateId: React.Dispatch<React.SetStateAction<number>>;
  subCategories?: { [key: string]: number };
}
