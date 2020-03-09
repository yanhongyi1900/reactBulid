import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../../common/css/home.css";

import Frame from "../../common/component/frame";
import Tab from "../../common/component/tab";
import Course from "./course";
import Vip from "./vip";
import Unique from "./unique";
import Works from "./works";

// 网络请求

// 静态banner图片
const imgData = [
  require("../../common/images/bannerImg/img1.png"),
  require("../../common/images/bannerImg/img2.png"),
  require("../../common/images/bannerImg/img4.png")
];

function Home(props) {
  const { dispatch } = props;
  useEffect(_ => {}, [dispatch]);
  return (
    <Frame>
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
  );
}

export default connect(state => {
  return state;
})(Home);
