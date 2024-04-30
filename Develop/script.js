
  var rightNow = dayjs().format('hh'); 
  const data = []

document.getElementById("currentDay").textContent = dayjs().format("dddd, MMMM D");

function load( ){ 

  var loadData = localStorage.getItem(data); 
  console.log(loadData);
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
}

  


function updateColors() {
  var currentHour = dayjs().hour(); 
  var timeBlocks = document.getElementsByClassName("time-block");
  for (var i = 0; i < timeBlocks.length; i++) {
    var timeBlock = timeBlocks[i];
    var hour = parseInt(timeBlock.children[1].attributes.id.value); 
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
load();


function save() {
  console.log("save"); 

  const object = {
     id : $(this).siblings(".description").attr("id");
     text : $(this).siblings(".description").val()
  }
    data.push(object);
    localStorage.setItem(data);
  }

  var buttons = document.querySelectorAll(".saveBtn");

 buttons.forEach(button => { 
  button.addEventListener("click", save);
    
  });

