let hour = document.getElementById('hours');
let minute = document.getElementById('minutes');
let second = document.getElementById('seconds');
let ampm1 = document.getElementById('ampm');


function updateClock(){

  
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"
  
    if(h<10){
      h = "0" + h}
    else{h=h;}

    if(m<10){
        m = "0" + m}
        else{m=m;}

    if(s<10){
        s = "0" + s}
        else{s=s;}
    
    if(h>12){
        h=h-12;
        ampm = "PM";
    }
    hour.innerText=h;
    minute.innerText=m;
    second.innerText=s;
    ampm1.innerText=ampm;
    setTimeout(()=>{
        updateClock();
    },1000)
    
}


updateClock();



