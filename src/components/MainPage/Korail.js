import React from "react";
import "./Korail.css";
import { Link } from "react-router-dom";

const Korail = () => {
  return (
    <div className="K_main_frame">
      <div className="title_K">
        <label>코레일 톡이란?</label>
      </div>
      <iframe
        width="90%" // 변경된 사이즈
        height="315" // 변경된 사이즈
        src="https://www.youtube.com/embed/gFgB2vNLGrY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div>
        <p>
          이 웹사이트는 디지털 격차해소를 위한 사이트이며 코레일이라는 기차를
          자주타시는 어르신들을 앱 공포감 해소를 위주로 타겟을 하였다. 앱의
          연습을 통하여 어르신들의 앱 공포감을 줄이고 사용법을 익히며
          혼자해보기,같이해보기로 스스로할수있게 제작하였다.
        </p>
      </div>
      <div>
     
      </div>
    </div>
  );
};

export default Korail;
