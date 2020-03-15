export default function lecturer(
  state = {
    loading: false, //标记此刻正在加载
    data: {} //请求到的数据存储位置
  },
  action
) {
  switch (action.type) {
    case "LOAD_WORK": //加载时
      console.log("LOAD_WORK");
      return { ...state, loading: true };
    case "LOAD_WORK_END": //加载结束,需要将数据加入
      console.log("LOAD_WORK_END");
      return {
        ...state,
        loading: false,
        data: action.data
      };
    case "RESET_ARTICLE": //退出组件时清除缓存
      console.log("RESET_ARTICLE");
      return {
        loading: false,
        data: {}
      };
    default:
      return state;
  }
}
