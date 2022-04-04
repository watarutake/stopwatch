let timer = document.getElementById("timer")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")

let h =0;
let m =0;
let s =0;
let ms =0;
let interval;

function time(){
 ms++;
 if (ms / 10 == 1) {
  s++;
  ms = 0;
  if (s  / 60 == 1) {
   m++;
   s = 0;
   if (m / 60 == 1) {
    h++;
    m = 0;
    if (h / 100 == 1) {
     h = 0;
    }
   }
  }
 }
 timer.innerHTML = h + ":" + m + ":" + s + ":" + ms
} 
stop.disabled = true;
reset.disabled = true;
 
start.addEventListener("click",function(){
 interval = setInterval(time,100);
 start.disabled = true;
 stop.disabled = false;
 reset.disabled = false;
})

stop.addEventListener("click",function(){
 clearInterval(interval);
 start.disabled = false
 stop.disabled = true;
})

reset.addEventListener("click",function(){
 clearInterval(interval);
 timer.innerHTML = "0:0:0:0";
 h =0;
 m =0;
 s =0;
 ms =0;
 start.disabled = false;
 stop.disabled = true;
 reset.disabled = true;
})