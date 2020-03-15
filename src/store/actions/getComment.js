import HTTP from "./http";

export default function getComment() {
  // 每次请求前先在redux中拿到works中目前的page

  return function(dispatch, getState) {
    dispatch({
      type: "LOAD_COMMENT"
    });
    let {
      article: {
        data: { id }
      },
      comment: { page }
    } = getState();

    return HTTP.post(`/lecturer/getcomment?page=${page}&rows=20`, {
      article_id: id
    }).then(res => {
      if (res.data.length) {
        dispatch({
          type: "LOADOVER_COMMENT",
          data: res.data,
          page: page + 1,
          id: id
        });
        return true;
      }
      dispatch({
        type: "LOADEND_COMMENT"
      });
      return false;
    });
  };
}
