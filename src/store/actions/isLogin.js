import HTTP from "./http";

export default function islogin(dispatch) {
  return function() {
    return HTTP.post("/user/islogin").then(res => {
      if (res.data.code == 0) {
        dispatch({
          type: "LOGIN",
          user: res.data.username
        });
      }
    });
  };
}
