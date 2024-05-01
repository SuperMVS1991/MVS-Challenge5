
  var rightNow = dayjs().format('hh'); 
  const data = []

document.getElementById("currentDay").textContent = dayjs().format("dddd, MMMM D");

function load( ){ 

  
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
  textArea.setAttribute("id", i);
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


  for (var i = 9; i < 19; i++) {
    var text = localStorage.getItem(i);
    if (text) { 
      console.log(text);
      document.getElementById(i).value = text;
    }
  }
}

function updateColors() {
  var currentHour = dayjs().hour(); 
  var timeBlocks = document.getElementsByClassName("time-block");
  for (var i = 0; i < timeBlocks.length; i++) {
    var timeBlock = timeBlocks[i];
    var hour = parseInt(timeBlock.children[1].attributes.id.value); 
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
load();
updateColors();


function save() {
  console.log("save");  
//  const saveArray = [];
var id = $(this).siblings(".description").attr("id"); 
//saveArray.push(id); 
var text = $(this).siblings(".description").val(); 
//saveArray.push(text);
  
   
    
    localStorage.setItem(id, text);
  }

  var buttons = document.querySelectorAll(".saveBtn");

 buttons.forEach(button => { 
  button.addEventListener("click", save);
    
  });

