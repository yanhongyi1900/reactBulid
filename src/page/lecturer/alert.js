import React, { useRef, useEffect } from "react";
import BScroll from "@better-scroll/core";
import ScrollBar from "@better-scroll/scroll-bar";

BScroll.use(ScrollBar);
export default function Alert(props) {
  let { sendData, setShow } = props;
  let lecturerEl = useRef(null);
  let alertTextEl = useRef(null);
  let alertScroll = null;
  useEffect(_ => {
    alertScroll = new BScroll(alertTextEl.current, {});
    return function() {
      alertScroll = null;
    };
  });
  return (
    <div
      ref={lecturerEl}
      className="lecturer_alert_wrap"
      onTouchStart={e => {
        if (e.target === lecturerEl.current) {
          setShow(false);
        }
      }}
    >
      <div className="lecturer_alert">
        <div className="lecturer_alert_content">
          <img alt="" src={sendData ? sendData.icon : ""} />
          <h3>{sendData ? sendData.title : ""}</h3>
          <div className="lecturer_alert_text_wrap">
            <div
              className="lecturer_alert_text_main"
              ref={alertTextEl}
              dangerouslySetInnerHTML={{
                __html: sendData ? sendData.content : ""
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
