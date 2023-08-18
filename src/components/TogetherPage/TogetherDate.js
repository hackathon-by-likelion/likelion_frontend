import React, { useState } from "react";
import "./TogetherDate.css";
import { SlArrowDown } from "react-icons/sl";
import DatePicker from "react-datepicker"; // Import the date picker component
import "react-datepicker/dist/react-datepicker.css";

const TogetherDate = (props) => {
  const date = new Date();
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 15); // 15 days from now

  const minSelectableDate = new Date();
  minSelectableDate.setDate(minSelectableDate.getDate() - 5); // 5 days ago from now

  const maxSelectableDate = new Date();
  maxSelectableDate.setDate(maxSelectableDate.getDate() + 5); // 5 days from now

  const month = date.toLocaleString("ko-KR", { month: "long" });
  const day = date.toLocaleString("ko-KR", { day: "2-digit" });
  const year = date.getFullYear();
  var week = new Array("일", "월", "화", "수", "목", "금", "토");
  var today = new Date().getDay();
  var todayLabel = week[today];
  const hour = date.getHours();
  const minutes = date.getMinutes();

  const [selectedDate, setSelectedDate] = useState(null); // State to hold selected date

  const [showMessage, setShowmessage] = useState(false);

  // Calculate date information from selectedDate
  const selectedMonth =
    selectedDate?.toLocaleString("ko-KR", { month: "long" }) || "";
  const selectedDay =
    selectedDate?.toLocaleString("ko-KR", { day: "2-digit" }) || "";
  const selectedYear = selectedDate?.getFullYear() || "";
  const selectedDayOfWeek = selectedDate
    ? week[selectedDate.getDay()]
    : todayLabel;

  const handleMessage = () => {
    setShowmessage(!showMessage);
  };

  return (
    <div className="together_reserve_date">
      <p>출발일</p>
      <div className="together_reserve-date_sub">
        {selectedDate ? (
          <p>
            {selectedYear}년 {selectedMonth} {selectedDay} ({selectedDayOfWeek})
          </p>
        ) : (
          <p>
            {year}년 {month} {day} ({todayLabel}) {hour}:{minutes}
          </p>
        )}
      </div>
      <div className="together_calendar">
        <DatePicker
          selected={selectedDate} // Set the selected date
          onChange={(date) => setSelectedDate(date)} // Handle date selection
          dateFormat="yyyy년 MM월 dd일 (eee)" // Format of the displayed date
          minDate={minSelectableDate} // Set minimum date to 5 days ago from today
          maxDate={maxSelectableDate} // Set maximum date to 5 days from today
            className="together_calendar_button" // Apply CSS class to style the input
          customInput={
            <button
              className="together_calendar_button"
              onMouseEnter={handleMessage}
              onMouseLeave={handleMessage}
            >
              <SlArrowDown size={15} color="blue" />
              {showMessage && (
                <div className="t_message">날짜를 설정해주세요</div>
              )}
            </button>
          }
        />
      </div>
    </div>
  );
};

export default TogetherDate;
