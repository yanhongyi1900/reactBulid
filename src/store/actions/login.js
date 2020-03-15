import HTTP from "./http";

export default function login(dispatch) {
  return function(data) {
    return HTTP.post("/user/login", data).then(res => {
      if (res.data.code === 0) {
        dispatch({
          type: "LOGIN",
          user: data.username
        });
      }
      return res.data;
    });
  };
}
