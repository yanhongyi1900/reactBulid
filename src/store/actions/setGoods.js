import HTTP from "./http";

export default function setGoods() {
  return function(dispatch, getState) {
    let {
      article: {
        data: { id }
      }
    } = getState();

    return HTTP.post(`/lecturer/good`, {
      article_id: id
    }).then(res => {
      if (res.data.code === 0) {
        dispatch({
          type: "SET_GOODS",
          id: res.data.id
        });
      }
      return res.data;
    });
  };
}
