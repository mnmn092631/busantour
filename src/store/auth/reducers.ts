import * as T from "./types";

const initialState: T.State = {
  isLoggedIn: false,
};

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case "@auth/login":
      return { ...action.payload, isLoggedIn: true };
    case "@auth/logout":
      return { isLoggedIn: false };
  }
  return state;
};
