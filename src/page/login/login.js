import React, { useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import login from "../../store/actions/login";
import { useGetVerify } from "../../common/hooks";

function LoginBox(props) {
  const { changeLogin, dispatch, history, setShow, setData } = props;
  const verify = useRef(null);
  const verifyEl = useRef(null);
  const userEl = useRef(null);
  const pwdEl = useRef(null);
  const getVerify = useGetVerify();

  function toLogin() {
    let loginInfo = {
      verify: verifyEl.current.value,
      username: userEl.current.value,
      password: pwdEl.current.value
    };
    login(dispatch)(loginInfo).then(res => {
      if (res.code !== 0) {
        setShow(true);
        setData(res);
      } else {
        history.goBack();
      }
    });
  }

  useEffect(
    _ => {
      // 刷新验证码
      getVerify(verify.current);
    },
    [getVerify]
  );

  return (
    <div className="login_box">
      <figure className="login_head">
        <img alt="" src={require("../../common/images/login_head.png")}></img>
        <figcaption>如有账号，请直接登录</figcaption>
      </figure>
      <div className="login_form">
        <p className="iconfont icon-denglu">
          <input
            type="text"
            ref={userEl}
            className="user"
            placeholder="用户名"
          />
        </p>
        <p className="iconfont icon-mima">
          <input
            className="pwd"
            ref={pwdEl}
            type="password"
            placeholder="请输入密码"
          />
        </p>
        <p className="iconfont icon-authcode">
          <input
            className="verifycode"
            ref={verifyEl}
            type="text"
            placeholder="验证码"
          />
          <img
            ref={verify}
            className="verify"
            onTouchStart={_ => {
              getVerify(verify.current);
            }}
            alt=""
          />
        </p>
        <button className="form_btn" onTouchStart={toLogin}>
          登录
        </button>
        <p className="login_tips">
          没有帐号？
          <span onTouchStart={changeLogin}>立即注册</span>
        </p>
      </div>
    </div>
  );
}

export default connect(state => {
  return state;
})(withRouter(LoginBox));
