import React from "react";
import Frame from "../../common/component/frame";
import Plan from "./plan";
import Footer from "../../common/component/footer";

import "../../common/css/course.css";

function Course() {
  return (
    <div className="main_wrap_2">
      <Frame>
        <div>
          <div className="course_main_wrap">
            <div className="course_title">
              <span className="course_logo"></span>
            </div>
            <Plan></Plan>
            <div className="course_more">
              <p>
                更详细的课程安排请点击：
                <a href="http://www.miaov.com">www.miaov.com</a>
              </p>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </Frame>
    </div>
  );
}

export default Course;
