import React, { useState, useEffect, useRef } from "react";
import IndexRouter from "./router";
import Header from "./common/component/header";
import Menu from "./common/component/menu";
import "./common/css/common.css";
import { useInnerHeight } from "./common/hooks";

function App() {
  const [isShow, setIsShow] = useState(false);
  let tempEl = useRef(null);
  function hiddenMenu() {
    setIsShow(false);
  }
  function changeShow() {
    setIsShow(!isShow);
  }

  const innerHeight = useInnerHeight();
  return (
    <div className="page">
      <Header changeShow={changeShow} hiddenMenu={hiddenMenu}></Header>
      <Menu hiddenMenu={hiddenMenu}></Menu>
      <div
        className="main_wrap"
        style={{ transform: `translateX(${isShow ? 1.4 : 0}rem)` }}
        onTouchStart={hiddenMenu}
      >
        <div className="main_wrap_1" style={{ height: `${innerHeight}px` }}>
          <IndexRouter></IndexRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
