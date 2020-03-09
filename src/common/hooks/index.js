function useInnerHeight() {
  return window.innerHeight;
}

function useBack(history) {
  return function() {
    if (history.length > 2) {
      history.goBack();
    } else {
      history.push("/");
    }
  };
}

function useGetVerify() {
  return function(el) {
    let time = new Date().getTime();
    el.src = `/miaov/user/verify?${time}`;
  };
}

export { useInnerHeight, useBack, useGetVerify };
