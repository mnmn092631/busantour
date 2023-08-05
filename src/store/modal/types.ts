import { Action } from "redux";

export interface State {
  isOpen: boolean;
  modalType?: "places" | "foods" | "festivals";
  dataId?: number;
}

export type OpenModalAction = Action<"@modal/openModal"> & {
  payload: {
    modalType: "places" | "foods" | "festivals";
    dataId: number;
  };
};

export type CloseModalAction = Action<"@modal/closeModal">;

export type Actions = OpenModalAction | CloseModalAction;
