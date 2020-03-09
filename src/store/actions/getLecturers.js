import HTTP from "./http";
export default function getLecturer(id) {
  HTTP.post("/lecturer/lists?page=1&rows=100", {
    order: "desc",
    sort: "sort",
    category_id: 2,
    recommend: 0
  });
}
