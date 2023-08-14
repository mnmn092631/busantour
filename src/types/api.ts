export interface RawPlaceData {
  id: number;
  name: string;
  gugun: string;
  lat: number;
  lng: number;
  title: string;
  subtitle: string;
  addr: string;
  category: string;
  tags: string;
  homepage_u: string;
  trfc_info: string;
  hldy_info: string;
  usage_time: string;
  usage_amou: string;
  middle_siz: string;
  main_img_n: string;
  main_img_t: string;
  itemcntnts: string;
  geometry: string;
}

export interface PlaceData extends RawPlaceData {
  categoryColor: string;
  tagsArr: string[];
}

export interface RawTourData {
  id: number;
  name: string;
  gugun: string;
  lat: number;
  lng: number;
  plage: string;
  cate_with: string;
  cate_season: string;
  cate_nature: string;
  cate_plan: string;
  tags: string;
  title: string;
  subtitle: string;
  main_place: string;
  addr: string;
  trfc_info: string;
  usage_day: string;
  hldy_info: string;
  usage_time: string;
  usage_amou: string;
  middle_siz: string;
  main_img_n: string;
  main_img_t: string;
  itemcntnts: string;
}

export interface TourData extends RawTourData {
  cateArr_with: string[];
  cateArr_season: string[];
  cateArr_nature: string[];
  cateArr_plan: string[];
  tagsArr: string[];
}

export interface RawFoodData {
  id: number;
  name: string;
  gugun: string;
  category: string;
  lat: number;
  lng: number;
  addr: string;
  usage_open: string;
  usage_close: string;
  usage_breaktime: string;
  menu: string;
  main_img_n: string;
  main_img_t: string;
  itemcntnts: string;
  geometry: string;
}

export interface FoodData extends RawFoodData {
  categoryColor: string;
  menuArr: string[];
}

export interface RawFestivalData {
  id: number;
  name: string;
  subname: string;
  gugun: string;
  category: string;
  startDate: Date;
  endDate: Date;
  place: string;
  hosting_method: string;
  tags: string;
  main_img_n: string;
}

export interface FestivalData extends RawFestivalData {
  categoryColor: string;
  tagsArr: string[];
}

export interface AuthData {
  username: string;
  password: string;
}

export interface CommentData {
  id: number;
  comment: string;
  createdAt: Date;
  type: "place" | "tour" | "food" | "festival";
  typeId: number;
  username: string;
}
