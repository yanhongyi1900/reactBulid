import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Works(props) {
  let {
    works: { data, loading, loadend }
  } = props;

  return (
    <div className="works">
      <h3>学员作品</h3>
      <ul className="works_list">
        {data.map((item, index) => {
          return (
            <li key={index}>
              <Link to={"/work/" + item.id}>
                <img src={item.icon} className="work_a" alt="" />
                <p>
                  <span className="wrork_txt">
                    <strong>{item.title}</strong>
                    <span>
                      <em className="iconfont icon-liuyan">{item.message}</em>
                      <em className="iconfont icon-tuijian1">{item.good}</em>
                    </span>
                  </span>
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="more">
        <span>
          {loadend
            ? "没有新的数据了,不要再拉我了"
            : loading
            ? "正在请求中...不要着急"
            : "下拉可以获取更多"}
        </span>
      </p>
    </div>
  );
}

export default connect(state => {
  return state;
})(Works);
