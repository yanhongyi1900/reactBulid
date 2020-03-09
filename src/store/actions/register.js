import HTTP from "./http";

export default function register(data) {
  return HTTP.post("/user/register", data);
}
