import { useState, ChangeEvent } from "react";
import "./styles.css";
import DateBubble from "./dateBubble";
import moment from "moment";
import { maxSliderValue, minSliderValue } from "../../constants";
import { getWeekDays, formatDate } from "../../utils/momentHelper";
// import moment from "moment";

export default function HorizontalCalender() {
  const [date, setDate] = useState(moment().weekday() + 3);
  let minValue = minSliderValue;
  let maxValue = maxSliderValue;

  let newPosition =
    ((date - moment().weekday()) / (maxSliderValue - moment().weekday())) * 100;

  return (
    <div className="container">
      <p className="prompt">Choose a date, please:</p>
      <div className="slider-container">
        <input
          type="range"
          className="slider"
          min={minValue}
          max={maxValue}
          value={date}
          onChange={(e: ChangeEvent<any>) => setDate(e.target.value)}
        />
        <div
          className="date-value"
          style={{
            left: `${newPosition}%`,
            marginLeft: `${
              date.toString() === minValue.toString()
                ? "0"
                : date.toString() === maxValue.toString()
                ? "-10%"
                : "-5%"
            }`
          }}
        >
          {moment().day(date).format("dddd, MMMM Do YYYY").toString()}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div>
        {getWeekDays().map((e) => (
          <>
            <span key={e.toString()}>{formatDate(e.toString())}</span>
            <br />
          </>
        ))}
      </div>
      <h3>{moment().day(date).format("dddd, MMMM Do YYYY").toString()}</h3>
      <h3> {maxSliderValue.toString()} </h3>
      <h3> {moment().weekday().toString()} </h3>
      <h3> {date} </h3>
      <DateBubble />
    </div>
  );
}
