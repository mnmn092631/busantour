import { FoodData, PlaceData, TourData } from "./api";

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
  item: PlaceData | FoodData | TourData;
  subCategories?: { [key: string]: number };
  onClick: () => void;
}
