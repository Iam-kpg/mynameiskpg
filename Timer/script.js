const days=document.querySelector("#Days");
const hrs=document.querySelector("#Hours");
const mins=document.querySelector("#Minutes");
const secs=document.querySelector("#Seconds");

//secs.innerHTML="mine";
function timer()
{
const currentYear = new Date().getFullYear();
const newyear=new Date(`January 1 ${currentYear+1} 00:00:00`)
const currentdate=new Date();
const diff=newyear-currentdate;
const d=  Math.floor(diff/1000/60/60/24);
const hr= Math.floor((diff/1000/60/60)%24);
const min= Math.floor((diff/1000/60)%60);
const sec= Math.floor((diff/1000)%60);

days.innerHTML=d<10?"0"+d:d;
hrs.innerHTML=hr<10?"0"+hr:hr;
mins.innerHTML=min<10?"0"+min:min;
secs.innerHTML=sec<10?"0"+sec:sec;

//console.log(d+" "+hr+" "+min+" "+sec)
}
//timer()
setInterval(timer,1000);
/*
//console.log(diff)
//console.log(currentdate);
//console.log(newyear);
//console.log(currentYear)
console.log(d);
console.log(hr);
console.log(min);
console.log(sec);*/



