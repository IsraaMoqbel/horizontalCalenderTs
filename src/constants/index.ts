import moment from "moment";

export const minSliderValue = moment().weekday();
export const maxSliderValue = moment().weekday() + 7;
