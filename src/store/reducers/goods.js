export default function goods(state = { isgood: false, id: null }, action) {
  switch (action.type) {
    case "SET_GOODS":
      // 点赞
      return { ...state, isgood: true, id: action.id };
    case "CANCLE_GOODS":
      // 取消点赞
      return { ...state, isgood: false, id: action.id };
    case "GET_GOODS":
      // 当点赞了会出现这个
      return { ...state, isgood: action.isgood, id: action.id || null };
    case "RESET_GOODS":
      // 组件卸载时充值good
      return { isgood: false, id: null };
    default:
      return state;
  }
}
