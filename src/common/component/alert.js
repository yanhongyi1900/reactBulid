import React from "react";

export default function Alert(props) {
  let { show, setShow, data } = props;
  console.log(data);
  return (
    <div
      style={{ display: `${show ? "block" : "none"}` }}
      className="page_alert_wrap"
    >
      <div className="page_alert_main">
        <div className="page_alert_header">
          <span className="page_alert_title">
            {data ? `错误代码 - ${data.code}` : ""}
          </span>
          <span
            className="page_alert_close"
            onTouchStart={_ => {
              setShow(false);
            }}
          >
            x
          </span>
        </div>
        <div className="page_alert_content">
          <p>{data ? `${data.msg}` : ""}</p>
        </div>
      </div>
    </div>
  );
}
