// 現在時刻,日付取得
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


// 多分こっからスパゲッティする
// あの時計ルールがわからん

function lightSwitch() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    // let minutes = 0;

    // O'Clock
    if(minutes == 0) {
        let elements = document.querySelectorAll(".r10 .c6, .r10 .c7, .r10 .c8, .r10 .c9, .r10 .c10, .r10 .c11");
        elements[0].className = elements[0].className + " fireUp";
        elements[1].className = elements[1].className + " fireUp";
        elements[2].className = elements[2].className + " fireUp";
        elements[3].className = elements[3].className + " fireUp";
        elements[4].className = elements[4].className + " fireUp";
        elements[5].className = elements[5].className + " fireUp";
        
    }
}
setInterval('lightSwitch()',1000);
