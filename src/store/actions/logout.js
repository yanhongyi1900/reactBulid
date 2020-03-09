import HTTP from "./http";

export default function login() {
  return HTTP.post("/user/logout");
}
