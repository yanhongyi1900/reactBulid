import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);

function Frame(props) {
  const wrap = useRef(null);
  const { getMore, isScroll } = props;

  // isScroll代表是否允许该页面有滚动刷新
  // getMore 结果会返回一个布尔值，如果为true则上拉加载取消，为false则可以上拉加载。

  useEffect(function() {
    window.pageScroll = new BScroll(wrap.current, {
      preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/,
        className: /(^|\s)work_a(\s|$)/
      },
      pullUpLoad: isScroll ? false : { threshold: 400 }
      // 根据works中的loadend判断是否开启上拉加载
      // finishPullUp() 触发上拉事件后，在回调函数的最后，都要调用此函数，不然不会触发下次pullingUp事件
    });
    if (getMore) {
      window.pageScroll.on("pullingUp", _ => {
        // 当距离滚动到底部小于400时，触发一次pullingUp
        getMore().then(res => {
          if (res) {
            window.pageScroll.finishPullUp();
            window.pageScroll.refresh();
          } else {
            window.pageScroll.closePullUp();
          }
        });
        // 在此处发送请求
        // 此请求会改变store中的loadend变为true
        // 为了复用，将请求作为回调传入
        // 最后需要刷新
      });
    }

    // fram卸载的时候将该scroll也删除
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

export default connect(state => {
  return state;
})(Frame);
