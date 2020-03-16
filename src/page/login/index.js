import React, { useState } from "react";
import Frame from "../../common/component/frame";
import LoginBox from "./login";
import RegisterBox from "./register";
import Alert from "../../common/component/alert";

import "../../common/css/login.css";

function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  function changeLogin() {
    setIsLogin(!isLogin);
  }

  return (
    <div className="main_wrap_2">
      <Frame>
        <div className="login_wrap">
          <div className="login_content">
            <h3>登录&注册</h3>
            <div className="box_wrap">
              <div
                className="box"
                style={{ transform: `rotateY(${isLogin ? 180 : 0}deg)` }}
              >
                <LoginBox
                  changeLogin={changeLogin}
                  setShow={setShow}
                  setData={setData}
                ></LoginBox>
                <RegisterBox changeLogin={changeLogin}></RegisterBox>
              </div>
            </div>
          </div>
        </div>
      </Frame>
      <Alert data={data} show={show} setShow={setShow}></Alert>
    </div>
  );
}

export default Login;
