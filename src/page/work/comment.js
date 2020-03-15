import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import setGoods from "../../store/actions/setGoods";
import cancleGoods from "../../store/actions/cancleGoods";
import getGoods from "../../store/actions/getGoods";

function Comment(props) {
  let {
    dispatch,
    comment,
    article: {
      data: { good }
    },
    getUser,
    history: { push }
  } = props;
  let [isgood, setIsgood] = useState(false);
  let [gooid, setGooid] = useState("");

  function set() {
    dispatch(setGoods()).then(res => {});
  }
  function cancle() {
    dispatch(cancleGoods()).then(res => {});
  }
  dispatch(getGoods()).then(res => {
    if (res.code === 0) {
      setIsgood(true);
      setGooid(res.gooid);
    }
  });

  return (
    <article className="article_comment_wrap ">
      <div className="article_good">
        <span className="left">有{good}人觉得很赞</span>
        <span
          className="iconfont icon-tuijian1 right"
          style={{ color: `${isgood ? "#e15672" : "#9b9a9a"}` }}
          onTouchStart={_ => {
            if (getUser) {
              if (isgood) {
                setIsgood(false);
                cancle(gooid);
              } else {
                setIsgood(true);
                set();
              }
            } else {
              push("/login");
            }
          }}
        ></span>
      </div>
      <div className="article_comment">
        <ul>
          {comment.data.map((item, index) => {
            return (
              <li key={index}>
                <p className="comment_id">{item.username}</p>
                <p className="comment_text">{item.content}</p>
                <p className="comment_time">{item.create_time}</p>
              </li>
            );
          })}
        </ul>
        <p>
          {comment.loadend
            ? "你已消灭所有数据"
            : comment.loading
            ? "前方大波数据正在赶来"
            : "下拉可刷新数据"}
        </p>
      </div>
    </article>
  );
}

export default connect(state => {
  return state;
})(withRouter(Comment));
