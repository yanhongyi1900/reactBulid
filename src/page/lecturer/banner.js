import React from "react";
import { connect } from "react-redux";
import Tab from "../../common/component/tab";

function Banner(props) {
  let { newData } = props;
  return (
    <div className="lecturers_banner_wrap">
      <h3>妙味团队</h3>
      {newData.length < 1 ? (
        ""
      ) : (
        <Tab
          data={newData}
          render={data => {
            return (
              <ul className="banner_page">
                {data.map(item => {
                  return (
                    <li
                      key={item.title}
                      onTouchStart={e => {
                        console.log(111);
                      }}
                      onTouchEnd={e => {}}
                    >
                      <img alt="" src={item.icon} />
                      <div>
                        <span>{item.title}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            );
          }}
        ></Tab>
      )}
    </div>
  );
}
export default connect(state => {
  return state;
})(Banner);
