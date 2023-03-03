

// Display the current date in the header.
var currentDate = $("#currentDay");
var today = dayjs();

currentDate.text(today.format("dddd, MMMM D, YYYY"));


//Check the current time to display the past, present, and future.
function checkTime() {
  var currentHour = dayjs().hour();

  console.log(currentHour);

  var timeId = $(".time-block");

  timeId.each(function () {
    var hoursList = $(this).attr("id").split("-");

    var hour = parseInt(hoursList[1]);

    if (hour > currentHour) {
      $(this).addClass("future");
    } else if (hour < currentHour) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }
  });
}
checkTime();

//Show items were saved in the storage.
function showData() {
  $("#hour-7 .description").val(localStorage.getItem("hour-7"));
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));
  $("#hour-19 .description").val(localStorage.getItem("hour-19"));
  $("#hour-20 .description").val(localStorage.getItem("hour-20"));
}
showData();

// Add a listener for click events on the save button.

$(".saveBtn").on("click", function () {
  //to get the content of the description.
  //"this" refers to the .saveBtn.
  //siblings(".class/#id name") refers to the specific element inside of that div
  var content = $(this).siblings(".description").val();

  //.attr('id') Get the value of an attribute
  var timeBlock = $(this).parent().attr("id");

  localStorage.setItem(timeBlock, content);



  //Show confirmation message in the headline.
  timeLeft = 4;

  var showMessge = setInterval(() => {
    timeLeft--;
    var confirmation = $(".confirmation");
    confirmation.addClass("message");

    if (timeLeft <= 0) {
      var confirmation = $(".confirmation");
      confirmation.removeClass("message");
      clearInterval(showMessge);
    }
  }, 1000);
});
