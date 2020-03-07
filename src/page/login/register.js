import React from "react";

function RegisterBox(props) {
  const { changeLogin } = props;

  return (
    <div className="register_box">
      <figure className="register_head">
        <figcaption>注册账号</figcaption>
      </figure>
      <div className="register_form">
        <p className="iconfont icon-denglu">
          <input type="text" className="user" placeholder="用户名" />
        </p>
        <p className="iconfont icon-mima">
          <input className="pwd" type="password" placeholder="请输入密码" />
        </p>
        <p className="iconfont icon-mima">
          <input className="rpwd" type="password" placeholder="请确认密码" />
        </p>
        <p className="iconfont icon-authcode">
          <input className="verifycode" type="text" placeholder="验证码" />
          <img
            src="http://localhost:3001/miaov/user/verify?1583545837931"
            className="verify"
          />
        </p>
        <button className="form_btn">注册</button>
        <p className="register_tips">
          已有帐号？
          <span onTouchStart={changeLogin}>立即登录</span>
        </p>
      </div>
    </div>
  );
}

export default RegisterBox;
