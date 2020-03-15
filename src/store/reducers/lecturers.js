export default function lecturers(state = [], action) {
  switch (action.type) {
    case "GET_LECTURERS": //加载时
      console.log("GET_LECTURERS");
      return [...action.data];
    default:
      return state;
  }
}
