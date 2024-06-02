let int = null;
let time = document.getElementById("timer-section");
let ms = 0;
let second = 0;
let hours = 0;
let minutes = 0;

function settime() {
  ms += 10;
  if (ms == 1000) {
    ms = 0;
    second++;
    if (second == 60) {
      second = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hour++;
      }
    }
  }

  time.innerHTML = String(hours). padStart(2,0)+ ":" + String(minutes).padStart(2,0) + ":" + String(second).padStart(2,0) + ":" + String(ms).padStart(3,0);
 ;
}
document.getElementById("start").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(settime, 10);
});
document.getElementById("reset").addEventListener("click", () => {
  clearInterval(int);
  ms = 0;
  second = 0;
  hours = 0;
  minutes = 0;

  time.innerHTML = "00:00:00:000";
  document.getElementById("container2").innerHTML = ""
});

document.getElementById("pause").addEventListener("click", () => {
  clearInterval(int);
});
document.getElementById("bookmark").addEventListener("click", () => {
    let timers = document.getElementById("timer-section").innerHTML;
    
    // Create a new line break element
    let br = document.createElement("br");
    
    // Append the line break and the content to container2
    let container = document.getElementById("container2");
    container.appendChild(br);
    container.appendChild(document.createTextNode(timers));
});