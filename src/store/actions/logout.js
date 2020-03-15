import HTTP from "./http";

export default function logout(dispatch) {
  return function() {
    return HTTP("/user/logout").then(res => {
      return res.data;
    });
  };
}
