const dateTimeOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  fractionalSecondDigits: 3,
};
const dateTimeFormatter = new Intl.DateTimeFormat("en-Gb", dateTimeOptions)
  .format;

export const formatDateTime = dateTimeFormatter;
