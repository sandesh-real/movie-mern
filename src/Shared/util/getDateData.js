const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getMonth = (date) => {
  const d = new Date(date);
  let name = month[d.getMonth()];
  return name;
};

export const getFormatedDate = (date) => {
    const d = new Date(date);
    let newDate=`${month[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`
    return newDate;
};
