import { useState, useEffect, ChangeEvent } from "react";
import moment from "moment";
import DateBubble from "./dateBubble";
import CustumDayDisplayInput from "../custumDayDisplayInput";
import { formatDate } from "../../utils/momentHelper";
import "./styles.css";

export default function HorizontalCalender() {
  const [date, setDate] = useState(moment().weekday());
  const [minValue, setMinValue] = useState(date - 4);
  const [maxValue, setMaxValue] = useState(date + 4);
  const [dayDisplayFormat, setDayDisplayFormat] = useState("LLL");

  useEffect(() => {
    if (minValue.toString() === date.toString()) {
      setMinValue(minValue - 2);
      setMaxValue(maxValue - 2);
    } else if (maxValue.toString() === date.toString()) {
      setMinValue(minValue + 2);
      setMaxValue(maxValue + 2);
    }
    console.log(minValue, maxValue, maxValue - minValue);
  }, [date, minValue, maxValue]);
  return (
    <div className="container">
      <CustumDayDisplayInput
        value={dayDisplayFormat}
        onChange={setDayDisplayFormat}
      />
      <div className="slider-container">
        <DateBubble
          date={date}
          minValue={minValue}
          maxValue={maxValue}
          dayDisplayFormat={dayDisplayFormat}
        />
        <label className="prompt" htmlFor="date-slider">
          Choose a date through moving the slider, please:
        </label>
        <input
          type="range"
          className="slider"
          id="date-slider"
          min={minValue}
          max={maxValue}
          value={date}
          onChange={(e: ChangeEvent<any>) => setDate(e.target.value)}
        />
      </div>
      <p>
        You have selected the date:{" "}
        <b>{formatDate(moment().weekday(date).toString(), dayDisplayFormat)}</b>
      </p>
    </div>
  );
}
