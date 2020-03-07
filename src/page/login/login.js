import React from "react";

function LoginBox(props) {
  const { changeLogin } = props;
  return (
    <div className="login_box">
      <figure className="login_head">
        <img alt="" src={require("../../common/images/login_head.png")}></img>
        <figcaption>如有账号，请直接登录</figcaption>
      </figure>
      <div className="login_form">
        <p className="iconfont icon-denglu">
          <input type="text" className="user" placeholder="用户名" />
        </p>
        <p className="iconfont icon-mima">
          <input className="pwd" type="password" placeholder="请输入密码" />
        </p>
        <p className="iconfont icon-authcode">
          <input className="verifycode" type="text" placeholder="验证码" />
          <img
            src="http://localhost:3001/miaov/user/verify?1583545837931"
            className="verify"
          />
        </p>
        <button className="form_btn">登录</button>
        <p className="login_tips">
          没有帐号？
          <span onTouchStart={changeLogin}>立即注册</span>
        </p>
      </div>
    </div>
  );
}

export default LoginBox;
