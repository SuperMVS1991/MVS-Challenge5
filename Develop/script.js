
  var rightNow = dayjs().format('hh');

document.getElementById("currentDay").textContent = dayjs().format("dddd, MMMM D");


for (var i = 9; i < 19; i++) {
  var timeBlock = document.createElement("div");
  timeBlock.setAttribute("class", "time-block row");
  var time = document.createElement("div");
  time.setAttribute("class", "hour col-2 col-md-1");
  if (i > 12) {
    time.textContent = i - 12 + " PM";
  } 
  else if (i === 12) {
    time.textContent = i + " PM";
  }
  else {
    time.textContent = i + " AM";
  } 
  var textArea = document.createElement("textarea");
  textArea.setAttribute("class", "description col-8 col-md-10");
  textArea.setAttribute("id", "hour-" + i);
  var button = document.createElement("button");
  button.setAttribute("class", "saveBtn btn col-2 col-md-1");
  var icon = document.createElement("i"); 
  icon.setAttribute("class", "fas fa-save"); 
  button.appendChild(icon);
  timeBlock.appendChild(time);
  timeBlock.appendChild(textArea);
  timeBlock.appendChild(button);
  document.getElementById("time-blocks").appendChild(timeBlock);  
} 

function updateColors() {
  var currentHour = dayjs().hour(); 
  console.log(currentHour);
  var timeBlocks = document.getElementsByClassName("time-block");
  for (var i = 0; i < timeBlocks.length; i++) {
    var timeBlock = timeBlocks[i];
    console.log(timeBlock.children[1].attributes.id.value.split("-")[1]);
    var hour = parseInt(timeBlock.children[1].attributes.id.value.split("-")[1]); 
    console.log(hour);
    if (hour < currentHour) {
      timeBlock.setAttribute("class", "time-block row past");
    }
    else if (hour === currentHour) {
      timeBlock.setAttribute("class", "time-block row present");
    }
    else {
      timeBlock.setAttribute("class", "time-block row future");
    }
  }
} 

updateColors();

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
// save button to send the value to local storage 
// and load value to retireve the saved values 



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
});