let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let meridian = document.getElementById('meridian');

const leadZero = n => n<10? '0'+n: n;
const leadZeroh = n => n>12?n-12:n;

setInterval(function(){
  let date = new Date();
  let realHour = leadZero(date.getHours());
  
  if (realHour<12){
  document.getElementById('meridian').innerHTML = "AM";
}
else{
  document.getElementById('meridian').innerHTML = "PM";
}
hour.innerHTML = leadZero(leadZeroh(date.getHours()));
minute.innerHTML = leadZero(date.getMinutes());
second.innerHTML = leadZero(date.getSeconds());
if (realHour == 0){
  hour.innerHTML = 12
}
}, 1000);