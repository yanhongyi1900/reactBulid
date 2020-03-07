import React from "react";

function Course(props) {
  return (
    <div className="course_wrap">
      <ul className="course_list">
        <li className="course_item">
          <div className="item_title">
            <button className="popular">Popular</button>
            <h3>
              VIP自学阵营<span>A联盟-HTML&CSS</span>
            </h3>
          </div>
          <div className="item_price">
            <div className="item_price">
              <span>FREE</span>
            </div>
          </div>
          <div className="item_txt">
            <p>以免费公开课的形式，解决你在学习中遇到的问题。</p>
          </div>
          <div className="item_button">
            <a href="https://www.kaikeba.com/">报名</a>
          </div>
        </li>
        <li className="course_item">
          <div className="item_title">
            <h3>
              WEB前端开发<span>零基础课程</span>
            </h3>
          </div>
          <div className="item_price">
            <span>FREE</span>
          </div>
          <div className="item_txt">
            <h3>￥4800</h3>
            <p>PC端静态页面，移动商静 态页面制作...</p>
          </div>
          <div className="item_button">
            <a href="https://www.kaikeba.com/">报名</a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Course;
