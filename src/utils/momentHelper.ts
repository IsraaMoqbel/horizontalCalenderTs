import moment from "moment";

export const formatDate = (date: string, locale: string = "en") => {
  moment.locale(locale);
  return moment(date).format("dddd, MMMM Do YYYY");
};

export const getWeekDays = () => {
  const startOfWeek = moment().startOf("week");
  const endOfWeek = moment().endOf("week");
  const days = [];
  let day = startOfWeek;

  while (day <= endOfWeek) {
    days.push(day.toDate());
    day = day.clone().add(1, "d");
  }

  return days;
};
