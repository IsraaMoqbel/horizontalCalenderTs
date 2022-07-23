import { useState, ChangeEvent } from "react";
import moment from "moment";
import DateBubble from "./dateBubble";
import { maxSliderValue, minSliderValue } from "../../constants";
import { formatDate } from "../../utils/momentHelper";
import "./styles.css";

export default function HorizontalCalender() {
  const [date, setDate] = useState(minSliderValue + 3);
  let minValue = minSliderValue;
  let maxValue = maxSliderValue;

  return (
    <div className="container">
      <p className="prompt">Choose a date, please:</p>
      <div className="slider-container">
        <DateBubble date={date} />
        <input
          type="range"
          className="slider"
          min={minValue}
          max={maxValue}
          value={date}
          onChange={(e: ChangeEvent<any>) => setDate(e.target.value)}
        />
      </div>
      <br />
      <p>
        You have chosen: <b>{formatDate(moment().weekday(date).toString())}</b>
      </p>
    </div>
  );
}
