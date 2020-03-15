import React from "react";

export default function Plan() {
  return (
    <div className="plan_wrap">
      <table>
        <thead>
          <tr>
            <th>星期</th>
            <th>时间</th>
            <th>学习内容</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="2">周一</td>
            <td>上午</td>
            <td>前端代码初始</td>
          </tr>
          <tr>
            <td>下午</td>
            <td>基本属性：背景，边框</td>
          </tr>

          <tr>
            <td rowSpan="2">周二</td>
            <td>上午</td>
            <td>h5标签与css选择器</td>
          </tr>
          <tr>
            <td>下午</td>
            <td>练习题</td>
          </tr>

          <tr>
            <td rowSpan="2">周三</td>
            <td>上午</td>
            <td>浮动的深度剖析</td>
          </tr>
          <tr>
            <td>下午</td>
            <td>定位进阶</td>
          </tr>

          <tr>
            <td rowSpan="2">周四</td>
            <td>上午</td>
            <td>表单详解</td>
          </tr>
          <tr>
            <td>下午</td>
            <td>表单的相关属性</td>
          </tr>

          <tr>
            <td>周五</td>
            <td>全体</td>
            <td>浏览器兼容性</td>
          </tr>

          <tr>
            <td>周末</td>
            <td colSpan="2">合理安排自己的时间，记得做练习哦！</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
