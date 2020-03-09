import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useBack } from "../hooks";

import isLogin from "../../store/actions/isLogin";
import { connect } from "react-redux";

function Header(props) {
  const {
    changeShow,
    hiddenMenu,
    location: { pathname },
    history,
    dispatch
  } = props;

  useEffect(_ => {
    isLogin(dispatch)();
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
          <Link to="/login">
            <img
              className="header_login"
              src={require("../images/login.png")}
              alt="login"
            />
          </Link>
        )}
      </div>
    </div>
  );
}

export default connect(state => {
  return state
})(withRouter(Header));
