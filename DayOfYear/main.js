function dayOfYear(str) {
  const date = str.split("/");
  let startYear = new Date(date[2]);
  let endYear = new Date(date[2], date[0] - 1, date[1]);
  let oneDay = 1000 * 60 * 60 * 24;
  return Math.ceil((endYear - startYear) / oneDay) + 1;
}

function calculateDays() {
  const dateInput = document.getElementById("dateInput").value;
  const outputElement = document.getElementById("output");

  if (dateInput) {
    const days = dayOfYear(dateInput);
    outputElement.textContent = `Output: ${days}`;
  } else {
    outputElement.textContent = "Please enter a valid date.";
  }
}
