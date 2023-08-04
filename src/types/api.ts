export interface PlaceData {
  id: number;
  name: string;
  gugun: string;
  lat: number;
  lng: number;
  travel_place: string;
  title: string;
  subtitle: string;
  addr1: string;
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
  cate2_nm: string;
  lat: number;
  lng: number;
  plage: string;
  tags: string;
  title: string;
  subtitle: string;
  main_place: string;
  addr1: string;
  homepage: string;
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
  addr1: string;
  url: string;
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
  gugun: string;
  name: string;
  subname: string;
  type: string;
  startDate: string;
  end_date: string;
  place: string;
  hosting_method: string;
  tags: string;
  main_img: string;
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
