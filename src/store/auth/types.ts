import { Action } from "redux";

export interface State {
  isLoggedIn: boolean;
  user?: { id: string; username: string };
}

export type loginAction = Action<"@auth/login"> & {
  payload: {
    user: { id: string; username: string };
  };
};

export type logoutAction = Action<"@auth/logout">;

export type Actions = loginAction | logoutAction;
