import { combineReducers } from "redux";
import * as Place from "./place";
import * as Tour from "./tour";
import * as Food from "./food";
import * as Festival from "./festival";
import * as Modal from "./modal";

export const rootReducer = combineReducers({
  places: Place.reducer,
  tours: Tour.reducer,
  foods: Food.reducer,
  festivals: Festival.reducer,
  modal: Modal.reducer,
});
