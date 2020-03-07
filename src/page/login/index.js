import React, { useState } from "react";
import Frame from "../../common/component/frame";
import LoginBox from "./login";
import RegisterBox from "./register";

import "../../common/css/login.css";

function Login() {
  const [isLogin, setIsLogin] = useState(false);
  function changeLogin() {
    setIsLogin(!isLogin);
    console.log(111);
  }

  return (
    <Frame>
      <div className="login_wrap">
        <div className="login_content">
          <h3>登录&注册</h3>
          <div className="box_wrap">
            <div
              className="box"
              style={{ transform: `rotateY(${isLogin ? 180 : 0}deg)` }}
            >
              <LoginBox changeLogin={changeLogin}></LoginBox>
              <RegisterBox changeLogin={changeLogin}></RegisterBox>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

export default Login;
