import { SetURLSearchParams } from "react-router-dom";
import { FoodData, PlaceData, TourData } from "./api";

export interface PageTitleProps {
  pageName: string;
  imgSrc: string;
  imgName: string;
}

export interface CategorySelectProps {
  categories: string[];
  cate: string;
  setSearchParams: SetURLSearchParams;
}

export interface CardProps {
  item: PlaceData | FoodData | TourData;
  subCategories?: { [key: string]: number };
  onClick: () => void;
}
