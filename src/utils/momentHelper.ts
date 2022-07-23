import moment from "moment";

export const formatDate = (
  date: string,
  format: string,
  locale: string = "en"
) => {
  moment.locale(locale);
  moment.updateLocale(locale, {
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "MM/DD/YYYY",
      LL: "MMM Do YYYY",
      LLL: "ddd, MMMM Do YYYY",
      LLLL: "dddd, MMMM Do YYYY"
    }
  });
  return moment(date).format(format);
};
