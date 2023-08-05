import type * as T from "./types";

export const openModal = (modalType: "places" | "foods" | "festivals", dataId: number): T.OpenModalAction => ({
  type: "@modal/openModal",
  payload: { modalType, dataId },
});

export const closeModal = (): T.CloseModalAction => ({ type: "@modal/closeModal" });
