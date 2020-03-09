import HTTP from "./http";
export default function getLecturer(id) {
  HTTP.post("/lecturer/info", {
    article_id: 1
  });
}
