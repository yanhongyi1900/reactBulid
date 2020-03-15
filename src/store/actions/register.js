import HTTP from "./http";

export default function register(dispatch) {
  return function(data) {
    return HTTP.post("/user/register", data).then(res => {
      return res.data;
    });
  };
}
