import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./First.css";

const First = () => {
  const [showButtons, setShowButtons] = useState(true);
  const [searchTrain, setSearchTrain] = useState(false);
  const [seatCheck, setSeatCheck] = useState(false);

  const choiceImage = (
    <img
      src={process.env.PUBLIC_URL + "/choice.jpg"}
      alt="열차"
      className="f_train-image"
    />
  );

  const [image, setImage] = useState(choiceImage); // choiceImage로 초기화

  const handleImageClick = () => {
    console.log("이미지가 변경돼야됨");
    setShowButtons(false);
    setImage(choiceImage); // 항상 choiceImage만 사용
  };

  const nextSeatHandler = () => {
    console.log("다음페이지로");
  };

  const handleTrain = () => {
    setSearchTrain(!searchTrain);
  };

  const handleSearch = () => {
    setSeatCheck(!seatCheck);
  };

  return (
    <div className="f_train-inquiry-container">
      <div className="f_title">
        <p>열차 조회</p>
      </div>
      <div className="f_image-container">
        <div>{image}</div>
        <Link to="/alert">
          <button className="f_final_step"></button>
        </Link>
      </div>
    </div>
  );
};

export default First;
