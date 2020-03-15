import HTTP from "./http";
export default function getWork(dispatch, id) {
  dispatch({
    type: "LOAD_WORK"
  });
  return HTTP.post("/lecturer/info", {
    article_id: id
  }).then(res => {
    dispatch({
      type: "LOAD_WORK_END",
      data: res.data
    });
    return res;
  });
}
