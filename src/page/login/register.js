import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import register from "../../store/actions/register";

import { useGetVerify } from "../../common/hooks/index";

function RegisterBox(props) {
  const { changeLogin, dispatch } = props;
  const userEl = useRef(null);
  const pwdEl = useRef(null);
  const rpwdEl = useRef(null);
  const verify = useRef(null);
  const verifyEl = useRef(null);
  const getVerify = useGetVerify();

  // 注册
  function toRegister() {
    let info = {
      verify: verifyEl.current.value,
      username: userEl.current.value,
      password: pwdEl.current.value,
      repassword: rpwdEl.current.value
    };
    register(dispatch)(info).then(res => {
      console.log(res);
      alert(res.msg);
      if (res.code === 0) {
        changeLogin();
      }
    });
  }

  useEffect(
    _ => {
      // 首次显示验证码
      getVerify(verify.current);
    },
    [getVerify]
  );

  return (
    <div className="register_box">
      <figure className="register_head">
        <figcaption>注册账号</figcaption>
      </figure>
      <div className="register_form">
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
        <p className="iconfont icon-mima">
          <input
            className="rpwd"
            ref={rpwdEl}
            type="password"
            placeholder="请确认密码"
          />
        </p>
        <p className="iconfont icon-authcode">
          <input
            ref={verifyEl}
            className="verifycode"
            type="text"
            placeholder="验证码"
          />
          <img
            ref={verify}
            src=""
            onTouchStart={_ => {
              getVerify(verify.current);
            }}
            className="verify"
            alt=""
          />
        </p>
        <button
          className="form_btn"
          onClick={_ => {
            toRegister();
          }}
        >
          注册
        </button>
        <p className="register_tips">
          已有帐号？
          <span onTouchStart={changeLogin}>立即登录</span>
        </p>
      </div>
    </div>
  );
}

export default connect(state => {
  return state;
})(withRouter(RegisterBox));
