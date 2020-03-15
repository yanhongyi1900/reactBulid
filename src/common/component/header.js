import React, { useEffect, useState, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import { useBack } from "../hooks";
import isLogin from "../../store/actions/isLogin";
import logout from "../../store/actions/logout";
import { connect } from "react-redux";

function Header(props) {
  const {
    changeShow,
    hiddenMenu,
    location: { pathname },
    history,
    dispatch
  } = props;
  const [userName, setUserName] = useState("");
  const logoutEl = useRef(null);
  const [menuShow, setMenuShow] = useState(false);
  function toLogout() {
    logout(dispatch)().then(res => {
      alert(res.msg);
      setUserName("");
      setMenuShow(false);
    });
  }

  useEffect(_ => {
    isLogin(dispatch)().then(res => {
      setUserName(res.data.username);
    });
  });
  const back = useBack(history);

  return (
    <div className="header">
      <div className="header_left">
        {pathname === "/login" ? (
          <span className="iconfont icon-back" onClick={back}></span>
        ) : (
          <span className="iconfont icon-hycaidan" onClick={changeShow}></span>
        )}
      </div>
      <div className="header_logo" onClick={hiddenMenu}>
        <img
          className="logo"
          src={require("../images/logo.png")}
          alt="miaov.com"
        />
        <h1 className="clip">miaov.com</h1>
      </div>
      <div className="header_right" onClick={hiddenMenu}>
        {pathname === "/login" ? (
          ""
        ) : (
          <Link
            to={userName ? "" : "/login"}
            onTouchStart={_ => {
              // userName ? setMenuShow(!menuShow) : "";
              if (userName) {
                setMenuShow(!menuShow);
              }
            }}
          >
            <span
              className={`iconfont icon-denglu ${userName ? "useractive" : ""}`}
            ></span>
          </Link>
        )}
      </div>
      <div
        ref={logoutEl}
        className="logout"
        style={{ display: menuShow ? "block" : "" }}
        onTouchStart={toLogout}
      >
        <span>登出</span>
      </div>
    </div>
  );
}

export default connect(state => {
  return state;
})(withRouter(Header));
