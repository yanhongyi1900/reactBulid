export default function works(
  state = {
    page: 1, //请求的页面
    loading: false, //标记此刻正在加载
    loadend: false, //没有数据可以请求了
    data: [] //请求到的数据存储位置
  },
  action
) {
  switch (action.type) {
    case "LOAD": //加载时
      console.log("LOAD");
      return { ...state, loading: true };
    case "LOADOVER": //加载结束,需要将数据加入
      console.log("LOADOVER");
      return {
        ...state,
        loading: false,
        page: action.page,
        data: state.data.concat(action.data)
      };
    case "LOADEND": //全都请求完，将loadend标识为true
      console.log("LOADEND");
      return { ...state, loadend: true, loading: false };
    default:
      return state;
  }
}
