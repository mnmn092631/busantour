import type * as T from "./types";

export const login = (id: string, username: string): T.loginAction => ({
  type: "@auth/login",
  payload: { user: { id: id, username: username } },
});

export const logout = (): T.logoutAction => ({ type: "@auth/logout" });
