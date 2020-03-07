import React from "react";
import { Link } from "react-router-dom";

export default function Works() {
  return (
    <div className="works">
      <h3>学员作品</h3>
      <ul className="works_list">
        <li>
          <Link to="/login">
            <img
              src="https://data.miaov.com/Uploads/article/icon/icon-1.jpg"
              className="work_a"
            />
            <p>
              <span className="wrork_txt">
                <strong>
                  学员作品感受正统的前端开发课程体系、体验超值的海量实战案例，凝聚妙味全体讲师知识精华，尽在妙味VIP！
                </strong>
                <span>
                  <em className="iconfont icon-liuyan">34</em>
                  <em className="iconfont icon-tuijian1">7</em>
                </span>
              </span>
            </p>
          </Link>
        </li>
      </ul>
      <p className="more">
        <a className="">没有新的数据了</a>
      </p>
    </div>
  );
}
