import HTTP from "./http";

export default function cancelGoods(data) {
  return function(dispatch, getState) {
    let {
      article: {
        data: { id }
      }
    } = getState();

    return HTTP.post(`/lecturer/cancelgood?`, {
      article_id: id,
      goodid: data
    }).then(res => {
      return res.data;
    });
  };
}
