function padNumber(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}
const getFormatedDate = (date, format) => {
  var formattedDate = date.getFullYear();
  if (format.includes("MM")) {
    formattedDate += "-" + padNumber(date.getMonth() + 1);
  }
  if (format.includes("DD") || format.includes("dd")) {
    formattedDate += "-" + padNumber(date.getDate());
  }
  if (format.includes("HH") || format.includes("hh")) {
    formattedDate += " " + padNumber(date.getHours());
  }
  if (format.includes("mm")) {
    formattedDate += ":" + padNumber(date.getMinutes());
  }
  if (format.includes("ss")) {
    formattedDate += ":" + padNumber(date.getSeconds());
  }
  return formattedDate;
};

export default getFormatedDate;
