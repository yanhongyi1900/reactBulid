import React, { useEffect, useRef } from "react";

import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);

function Frame(props) {
  const wrap = useRef(null);

  useEffect(_ => {
    window.pageScroll = new BScroll(wrap.current, {
      preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/,
        className: /(^|\s)work_a(\s|$)/
      },
      pullUpLoad: true ? { threshold: 200 } : false
    });
    window.pageScroll.on("pullingUp", _ => {
      window.pageScroll.finishPullUp();
      window.pageScroll.refresh();
    });
    return _ => {
      window.pageScroll = null;
    };
  }, []);

  return (
    <div className="main_content" ref={wrap}>
      {props.children}
    </div>
  );
}

export default Frame;
