import HTTP from "./http";
export default function getLecturer() {
  return function(dispatch, getState) {
    return HTTP.post("/lecturer/lists?page=1&rows=100", {
      order: "desc",
      sort: "sort",
      category_id: 2
    }).then(res => {
      dispatch({
        type: "GET_LECTURERS",
        data: res.data
      });
      return res.data;
    });
  };
}
