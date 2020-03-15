import React from "react";
import { connect } from "react-redux";
import "../../common/css/home.css";

import Frame from "../../common/component/frame";
import Tab from "../../common/component/tab";
import Course from "./course";
import Vip from "./vip";
import Unique from "./unique";
import Works from "./works";
import getWorks from "../../store/actions/getWorks";

// 静态banner图片
const imgData = [
  require("../../common/images/bannerImg/img1.png"),
  require("../../common/images/bannerImg/img2.png"),
  require("../../common/images/bannerImg/img4.png")
];

function Home(props) {
  const { dispatch } = props;
  function getMore() {
    return dispatch(getWorks(dispatch));
  }

  return (
    <div className="main_wrap_2">
      <Frame getMore={getMore} isScroll={false}>
        <div>
          <Tab
            data={imgData}
            render={(data, index) => {
              return <img src={data} alt={index} />;
            }}
          />
          <section className="main">
            <Course />
            <Vip />
            <Unique />
            <Works />
          </section>
        </div>
      </Frame>
    </div>
  );
}

export default connect(state => {
  return state;
})(Home);
