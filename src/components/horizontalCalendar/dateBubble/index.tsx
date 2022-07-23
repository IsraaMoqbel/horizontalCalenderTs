import moment from "moment";
import { basicBlue, darkBlue } from "../../../constants";
import { formatDate } from "../../../utils/momentHelper";
import { IDateBubble } from "../../../interfaces/IDateBubble";
import "./styles.css";

export default function DateBubble({
  date,
  minValue,
  maxValue,
  dayDisplayFormat
}: IDateBubble) {
  let newPosition = ((date - minValue) / (maxValue - minValue)) * 100;

  return (
    <div
      className="date-value"
      style={{
        left: `${newPosition}%`,
        marginLeft: `${
          // fix offset
          date.toString() === minValue.toString()
            ? "0"
            : date.toString() === maxValue.toString()
            ? "-10%"
            : "-5%"
        }`,
        fontWeight:
          // make current day stands out
          moment().weekday().toString() === date.toString()
            ? "bolder"
            : "lighter",
        color:
          moment().weekday().toString() === date.toString()
            ? darkBlue
            : basicBlue,
        fontStyle:
          moment().weekday().toString() === date.toString()
            ? "italic"
            : "normal"
      }}
    >
      {formatDate(moment().day(date).toString(), dayDisplayFormat)}
    </div>
  );
}
