import HTTP from "./http";

export default function getWorks() {
  HTTP.post(`/lecturer/lists?page2&rows=4`, {
    order: "desc",
    sort: "sort",
    category_id: 1,
    recommend: 1
  }).then(res => {
    // console.log(res);
  });
}
