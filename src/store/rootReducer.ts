import { combineReducers } from "redux";
import * as Place from "./place";
import * as Food from "./food";
import * as Festival from "./festival";
import * as Tour from "./tour";
import * as Modal from "./modal";
import * as Auth from "./auth";

export const rootReducer = combineReducers({
  places: Place.reducer,
  foods: Food.reducer,
  festivals: Festival.reducer,
  tours: Tour.reducer,
  modal: Modal.reducer,
  auth: Auth.reducer,
});
