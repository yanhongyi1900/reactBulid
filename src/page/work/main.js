import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Article from "./article";
import Tab from "../../common/component/tab";
import Comment from "./comment";

function Main(props) {
  let {
    article: { data },
    match: {
      params: { id }
    },
    setShow
  } = props;

  return (
    <div
      className="article_wrap"
      onTouchStart={_ => {
        setShow(false);
      }}
    >
      {data.id === id ? (
        <Tab
          data={data.image_path}
          render={data => {
            return (
              <img className="article_banner_img" alt="" src={data.path} />
            );
          }}
        ></Tab>
      ) : (
        ""
      )}
      <div className="article_content_wrap ">
        <Article></Article>
        <Comment></Comment>
      </div>
    </div>
  );
}

export default connect(state => {
  return state;
})(withRouter(Main));
