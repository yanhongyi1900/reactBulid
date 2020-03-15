import React from "react";

export default function Main() {
  return (
    <div className="lecturer_main_wrap">
      <h3>加入我们</h3>
      <div className="lecturer_main_join">
        <div>
          <p>web讲师</p>
          <p>人数：人数不限，多多益善</p>
          <p>薪资：面议</p>
        </div>
        <div>
          <p>课程顾问</p>
          <p>人数：3</p>
          <p>薪资：底薪+提成</p>
        </div>
        <div>
          <p>客服</p>
          <p>人数：3人</p>
          <p>薪资：面议</p>
        </div>
        <div>
          <p>行政前台助理</p>
          <p>人数：3人</p>
          <p>薪资：底薪+提成</p>
        </div>
      </div>
      <div className="lecturer_main_txt">
        <div className="left">
          <img alt="" src={require("../../common/images/xiaole.png")} />
        </div>
        <div className="text">
          <p>
            欢迎大家来到妙味课堂，在这里，公司文化轻松包容，且呈多元化发展倾向，职位晋级标准清晰量化，虽有上下级职称、却无论资排辈陋习……
          </p>
          <p>本招聘信息长期有效</p>
        </div>
      </div>
    </div>
  );
}
