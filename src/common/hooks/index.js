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

export { useInnerHeight, useBack };
