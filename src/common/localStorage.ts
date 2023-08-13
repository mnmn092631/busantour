import cookieMethod from "./cookie";

const getUser = () => {
  const userInfo =
    localStorage.getItem("userInfo") && cookieMethod.getCookie("accessToken") ? localStorage.getItem("userInfo") : null;
  return userInfo;
};

const removeUser = () => {
  cookieMethod.removeCookie("accessToken");
  localStorage.clear();
};

const localStorageMethod = { getUser, removeUser };

export default localStorageMethod;
