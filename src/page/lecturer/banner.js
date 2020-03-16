import React from "react";
import { connect } from "react-redux";
import Tab from "../../common/component/tab";

function Banner(props) {
  let { newData, setSendData, setShow } = props;
  return (
    <Tab
      data={newData}
      render={data => {
        return (
          <ul className="banner_page">
            {data.map(item => {
              return (
                <li
                  key={item.id}
                  onTouchStart={e => {
                    console.log(11111);
                  }}
                  onTouchEnd={e => {
                    setShow(true);
                    setSendData(item);
                  }}
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
  );
}
export default connect(state => {
  return state;
})(Banner);
