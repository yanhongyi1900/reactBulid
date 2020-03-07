import React, { useState } from "react";
import IndexRouter from "./router";
import Header from "./common/component/header";
import Menu from "./common/component/menu";
import "./common/css/common.css";

function App() {
  const [isShow, setIsShow] = useState(false);
  function hiddenMenu() {
    setIsShow(false);
  }
  function changeShow() {
    setIsShow(!isShow);
  }

  return (
    <div className="page">
      <Header changeShow={changeShow} hiddenMenu={hiddenMenu}></Header>
      <Menu hiddenMenu={hiddenMenu}></Menu>
      <div
        className="main_wrap"
        style={{ transform: `translateX(${isShow ? 1.4 : 0}rem)` }}
        onTouchStart={hiddenMenu}
      >
        <IndexRouter></IndexRouter>
      </div>
    </div>
  );
}

export default App;
