import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

function Article(props) {
  let { data } = props;
  let wrapEl = useRef(null);
  useEffect(_ => {
    let imgs = wrapEl.current.querySelectorAll("img");
    imgs.forEach(img => {
      img.onload = function() {
        window.pageScroll.refresh();
      };
    });
  });
  return (
    <article>
      <h3>{data.title}</h3>
      <div
        ref={wrapEl}
        className="article_content"
        dangerouslySetInnerHTML={{
          __html: data.content
        }}
      ></div>
    </article>
  );
}

export default connect(state => {
  return { data: state.article.data };
})(Article);
