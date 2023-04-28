function currentTime() {
let now = new Date();
let hour = ("0" + now.getHours()).slice(-2);
let hours = now.getHours();
let minute = ("0" + now.getMinutes()).slice(-2);
let minutes = now.getMinutes();
// let text = hour + ":" + minute;
// document.getElementById("currentTime").innerHTML = text;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
}
setInterval('currentTime()',1000);

function currentDate() {
let now = new Date();
let month = (now.getMonth() + 1);
let date = ("0" + now.getDate()).slice(-2);

// const weeks = ["日", "月", "火", "水", "木", "金", "土"]
// let weekday = weeks[now.getDay()];

const montheng3ar = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
const montheng3 = montheng3ar[month-1];

const text = montheng3 + " " + date;

document.getElementById("currentDate").innerHTML = text;
}
setInterval('currentDate()',1000);