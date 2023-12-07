export default function currentDates(currentDate) {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  return { currentYear, currentMonth, currentDay };
}
