import * as T from "./types";

const initialState: T.State = {
  isOpen: false,
};

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case "@modal/openModal":
      const { modalType, dataId } = action.payload;
      return { isOpen: true, modalType, dataId };
    case "@modal/closeModal":
      return { isOpen: false };
  }
  return state;
};
