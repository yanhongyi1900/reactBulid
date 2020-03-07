import React, { useEffect, useRef, useState } from "react";
import BScroll from "@better-scroll/core";
import Slide from "@better-scroll/slide";

BScroll.use(Slide);

function Tab(props) {
  let { data, render } = props;
  const bannerWrap = useRef(null);
  let [now, setNow] = useState(0);

  useEffect(_ => {
    let slide = null;
    let timer = 0;
    slide = new BScroll(bannerWrap.current, {
      scrollX: true,
      scrollY: false,
      slide: {
        loop: true,
        threshold: 100
      },
      momentum: false,
      stopPropagation: true
    });

    // 用于nav标签的指示
    slide.on("scrollEnd", _ => {
      setNow(slide.getCurrentPage().pageX);
    });

    // 自动轮播
    // 滚动前清理定时器
    slide.on("beforeScrollStart", _ => {
      clearTimeout(timer);
    });
    // 滚动结束后创建一个定时器
    slide.on("scrollEnd", toNextPage);
    // 加载页面自动开启一个定时器
    function toNextPage() {
      clearTimeout(timer);
      timer = setTimeout(_ => {
        slide.next();
      }, 2000);
    }
    toNextPage();
  }, []);

  return (
    <div className="banner">
      <div className="banner_img" ref={bannerWrap}>
        <ul className="banner_list">
          {data.map((item, index) => {
            return <li key={index}>{render(item)}</li>;
          })}
        </ul>
        <ul className="banner_nav">
          {data.map((item, index) => {
            return (
              <li key={index} className={index === now ? "active" : ""}></li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Tab;
