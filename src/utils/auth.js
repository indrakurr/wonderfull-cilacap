import Cookies from "js-cookie";

const auth = {
  isAuthorized() {
    return Cookies.get("token") ? true : false;
  },
  storeAuthCredential(token) {
    Cookies.set("token", token, { expires: 1 });
  },
  logout() {
    Cookies.remove("token");
    window.location.href = "/";
  },
};

export default auth;
