import HTTP from "./http";

export default function getWorks() {
  // 每次请求前先在redux中拿到works中目前的page
  return function(dispatch, getState) {
    dispatch({
      type: "LOAD"
    });
    let {
      works: { page }
    } = getState();

    console.log(page);
    return HTTP.post(`/lecturer/lists?page=${page}&rows=10`, {
      order: "desc",
      sort: "sort",
      category_id: 1,
      recommend: 1
    }).then(res => {
      if (res.data.length) {
        dispatch({
          type: "LOADOVER",
          data: res.data,
          page: page + 1
        });
        return true;
      }
      dispatch({
        type: "LOADEND"
      });
      return false;
    });
  };
}
