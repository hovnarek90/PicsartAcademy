let myButton = document.getElementById("calculateButton");

document

  .getElementById("calculateButton")
  .addEventListener("click", function () {
    let startDateString = document.getElementById("startDate").value;
    let endDateString = document.getElementById("endDate").value;
    if (!startDateString || !endDateString) {
      document.getElementById("error-result").innerHTML =
        "Please select both start and end dates and reset.";
      myButton.disabled = true;

      return;
    }
    let startDate = new Date(startDateString);
    let endDate = new Date(endDateString);
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      document.getElementById("error-result").innerHTML =
        "Please enter valid dates and reset.";

      return;
    }
    let timeDifference = endDate - startDate;
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    document.getElementById("result").innerHTML =
      "Number of days between the two dates: " + daysDifference + " days";
  });

document.getElementById("resetButton").addEventListener("click", function () {
  location.reload();
});
