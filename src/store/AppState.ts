import * as Place from "./place";
import * as Food from "./food";
import * as Festival from "./festival";
import * as Tour from "./tour";
import * as Modal from "./modal";
import * as Auth from "./auth";

export type AppState = {
  places: Place.State;
  foods: Food.State;
  festivals: Festival.State;
  tours: Tour.State;
  modal: Modal.State;
  auth: Auth.State;
};
