// Import necessary components from react-router-dom
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import "./Checked.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Checked = () => {
  const [showNewImage, setShowNewImage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSeat, setShowSeat] = useState(false); //말풍선1
  const [showSelect, setShowSelect] = useState(false); //말풍선2

  const handleImageChange = () => {
    setShowNewImage(!showNewImage);
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="check_frame">
      <div className="check_choose">
        <p>좌석 선택</p>
      </div>
      <div className="check_image-container">
        <div className="check_control">
          <img
            src={
              showNewImage
                ? process.env.PUBLIC_URL + "/checkedSeat2.jpg"
                : process.env.PUBLIC_URL + "/checkedSeat1.jpg"
            }
            alt="Seat Image"
            className="check_seat-image"
            onClick={openModal}
          />
          <button onClick={handleImageChange} className="check_but"></button>
        </div>
      </div>
      <Link to="/first">
        <button className="check_rect-container" />
      </Link>
    </div>
  );
};

export default Checked;
