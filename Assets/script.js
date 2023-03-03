// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
// });

// Display the current date in the header.

var currentDate = $("#currentDay");
var today = dayjs();

currentDate.text(today.format("dddd, MMMM D, YYYY"));

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
});
