import React, { useRef } from "react";
import BScroll from "@better-scroll/core";
import ScrollBar from "@better-scroll/scroll-bar";
BScroll.use(ScrollBar);
export default function Alert(props) {
  const wrapEl = useRef(null);
  let { sendData, show } = props;
  let lecturerEl = useRef(null);

  return (
    <div
      ref={lecturerEl}
      className="lecturer_alert_wrap"
      style={{ display: `${show ? "block" : "none"}` }}
      onTouchStart={e => {
        console.log(e.target);
        if (e.target === lecturerEl.current) {
        }
      }}
      onTouchEnd={e => {}}
    >
      <div className="lecturer_alert">
        {!sendData ? (
          ""
        ) : (
          <div className="lecturer_alert_content">
            <img alt="" src={sendData.icon} />
            <h3>{sendData.title}</h3>
            <div className="lecturer_alert_text_wrap" ref={wrapEl}>
              <div className="lecturer_alert_text">
                <div
                  dangerouslySetInnerHTML={{ __html: sendData.content }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
