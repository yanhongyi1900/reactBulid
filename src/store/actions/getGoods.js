import HTTP from "./http";

export default function getGoods() {
  return function(dispatch, getState) {
    let {
      article: {
        data: { id }
      }
    } = getState();

    return HTTP.post(`/lecturer/getgood?`, {
      article_id: id
    }).then(res => {
      return res.data;
    });
  };
}
