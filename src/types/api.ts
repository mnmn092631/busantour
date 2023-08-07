export interface PlaceData {
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
  usage_day: string;
  hldy_info: string;
  usage_time: string;
  usage_amou: string;
  middle_siz: string;
  main_img_n: string;
  main_img_t: string;
  itemcntnts: string;
  geometry: string;
}

export interface TourData {
  id: number;
  name: string;
  gugun: string;
  category: string;
  lat: number;
  lng: number;
  plage: string;
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
}

export interface TourTagsData {
  tagWord: string;
  tagCount: number;
}

export interface FoodData {
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

export interface FestivalData {
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

export interface JoinData {
  id: string;
  username: string;
  password: string;
}

export interface LoginData {
  id: string;
  password: string;
}
