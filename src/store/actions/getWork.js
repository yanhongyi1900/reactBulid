import HTTP from "./http";
export default function getWork(id) {
  HTTP.post("/lecturer/info", {
    article_id: 2
  }).then(res => {
    console.log(res);
  });
}
