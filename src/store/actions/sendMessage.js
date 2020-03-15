import HTTP from "./http";

export default function sendMessage(data) {
  return function(dispatch, getState) {
    let {
      article: {
        data: { id }
      }
    } = getState();

    return HTTP.post(`/lecturer/addcomment`, {
      article_id: id,
      content: data
    }).then(res => {
      if (res.data.code === 0) {
        // dispatch({
        //   type: "SET_GOODS",
        //   id: res.data.id
        // });
        console.log(res.data);
      }
      return res.data;
    });
  };
}
