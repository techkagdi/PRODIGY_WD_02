let int = null;
let time = document.getElementById("timer-section");
let ms = 0;
let second = 0;
let hours = 0;
let minutes = 0;

document.getElementById("start").addEventListener("click",()=>{
    if (int !== null){
      clearInterval(int);
    }
    int = setInterval(settime,10);
});

function settime(){
  ms += 10;
  if(ms == 1000){
    ms = 0;
    second ++;
    if(second == 60){
        second = 0;
        minutes ++;
        if(minutes == 60){
            minutes = 0;
            hour++;
        }
    }
  }

time.innerHTML = hours+":"+minutes+":"+second+":"+ms;

}
document.getElementById("reset").addEventListener("click",()=>{
   
      clearInterval(int);
    ms = 0;
 second = 0;
 hours = 0;
 minutes = 0;
   
time.innerHTML = "00:00:00:000";
});
document.getElementById("pause").addEventListener("click",()=>{
   
    clearInterval(int);
 

});