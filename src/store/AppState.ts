import * as Place from "./place";
import * as Tour from "./tour";
import * as Food from "./food";
import * as Festival from "./festival";

export type AppState = {
  places: Place.State;
  tours: Tour.State;
  foods: Food.State;
  festivals: Festival.State;
};
