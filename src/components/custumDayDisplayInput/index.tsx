import { ICustomDaysInput } from "../../interfaces/ICustomDaysInput";
import "./styles.css";

export default function CustumDayDisplayInput({
  value,
  onChange
}: ICustomDaysInput) {
  return (
    <>
      <label htmlFor="select" className="prompt">
        Choose how to display dates:{" "}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id="select"
      >
        <option value="L">Month numeral, day of month, year</option>
        <option value="LL">Month name, day of month, year</option>
        <option value="LLL">Day of week, month name, day of month, year</option>
      </select>
    </>
  );
}
