import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import getWork from "../../store/actions/getWork";
import getComment from "../../store/actions/getComment";

import "../../common/css/work.css";
import Frame from "../../common/component/frame";
import Main from "./main";
import Recomment from "./recomment";
function Work(props) {
  let {
    match: {
      params: { id }
    },
    dispatch,
    article: { loading }
  } = props;

  const [show, setShow] = useState(false);

  function getMore() {
    return dispatch(getComment());
  }

  useEffect(
    function() {
      getWork(dispatch, id);
      return function() {
        dispatch({
          type: "RESET_COMMENT"
        });
        dispatch({
          type: "RESET_ARTICLE"
        });
        dispatch({
          type: "RESET_GOODS"
        });
      };
    },
    [dispatch, id]
  );

  return (
    <div className="main_wrap_2">
      <Frame isScroll={false} getMore={getMore}>
        <div>{loading ? "正在加载" : <Main setShow={setShow}></Main>}</div>
      </Frame>
      <Recomment show={show} setShow={setShow}></Recomment>
    </div>
  );
}

export default connect(state => {
  return state;
})(withRouter(Work));
