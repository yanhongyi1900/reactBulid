import React, { useRef } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import sendMessage from "../../store/actions/sendMessage";

function Recomment(props) {
  let { show, setShow, getUser, history, dispatch } = props;
  let textEl = useRef(null);

  function sendText() {
    let text = textEl.current.value;
    console.log(text);
    if (!text) {
      alert("请输入你先说的话");
      return "";
    }
    dispatch(sendMessage(text));
  }
  return (
    <div className="recomment_wrap">
      <div
        className="recomment_showBtn"
        onTouchStart={_ => {
          if (!getUser) {
            console.log(111);
            history.push("/login");
          } else {
            setShow(true);
          }
        }}
      >
        回复本贴
      </div>
      <div
        className="recomment_input"
        style={{ transform: `translateY(${show ? "-100%" : "0"})` }}
      >
        <div className="input_wrap">
          <textarea placeholder="请输入你想说的吧" ref={textEl}></textarea>
        </div>
        <div
          className="recomment_showBtn"
          onTouchStart={_ => {
            setShow(false);
            sendText();
          }}
        >
          发表评论
        </div>
      </div>
    </div>
  );
}

export default connect(state => {
  return state;
})(withRouter(Recomment));
