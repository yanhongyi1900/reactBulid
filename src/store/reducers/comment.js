export default function comment(
  state = {
    id: 0, // 文章的id
    page: 1, // 请求的页面
    loading: false, // 标记此刻正在加载
    loadend: false, // 没有数据可以请求了
    data: [] // 请求到的数据存储位置
  },
  action
) {
  switch (action.type) {
    case "LOAD_COMMENT": //加载时
      console.log("LOAD_COMMENT");
      return { ...state, loading: true };
    case "LOADOVER_COMMENT": //加载结束,需要将数据加入
      console.log("LOADOVER_COMMENT");
      return {
        ...state,
        id: action.id,
        loading: false,
        page: action.page,
        data: state.data.concat(action.data)
      };
    case "LOADEND_COMMENT": //全都请求完，将loadend标识为true
      console.log("LOADEND_COMMENT");
      return { ...state, loadend: true, loading: false };
    case "RESET_COMMENT": //全都请求完，将loadend标识为true
      console.log("RESET_COMMENT");
      return {
        id: 0,
        page: 1,
        loading: false,
        loadend: false,
        data: []
      };
    default:
      return state;
  }
}
