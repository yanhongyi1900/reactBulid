import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Frame from "../../common/component/frame";
import Footer from "../../common/component/footer";
import Main from "./main";
import Banner from "./banner";
import Alert from "./alert";
import getLecturers from "../../store/actions/getLecturers";

import "../../common/css/lecturer.css";
function Lecturer(props) {
  let { lecturers, dispatch } = props;
  let newData = [];
  let [show, setShow] = useState(false);
  let [sendData, setSendData] = useState(null);

  function getNewData(data) {
    let tempData = [];
    data.map((item, index) => {
      let now = (index + 1) % 3;
      tempData.push(item);
      if (now === 0) {
        newData.push(tempData);
        tempData = [];
      }
      return "";
    });
  }
  getNewData(lecturers);

  useEffect(function() {
    dispatch(getLecturers());
  }, []);

  return (
    <div className="main_wrap_2">
      <Frame>
        <div>
          <div className="lecturers_banner_wrap">
            <h3>妙味团队</h3>
            {newData.length > 0 ? (
              <Banner
                setSendData={setSendData}
                setShow={setShow}
                newData={newData}
              ></Banner>
            ) : (
              ""
            )}
          </div>
          <Main></Main>
          <Footer></Footer>
        </div>
      </Frame>

      {show ? <Alert sendData={sendData} setShow={setShow} /> : ""}
    </div>
  );
}

export default connect(state => {
  return state;
})(Lecturer);
