// 現在日付取得
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
    let hours12 = now.getHours();
    if(hours == 0) {
        hours12 = 12;
    } else if (hours >= 13) {
        hours12 = hours - 12;
    }
    let minutes = now.getMinutes();


    // hours
    //文字盤のクラスを指定してる配列"hoursDSarray"を作成
    //「35分未満なら、hoursDSarray[hours12-1]」、
    //「35分以上でかつhours12=12なら、hoursDSarray[0]」、「35分以上でかつhours12!=12なら、hoursDSarray[hours12]」
    
    // [ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN, ELEVEN, TWELVE]
    const hoursDSarray = [".r6 .c1, .r6 .c2, .r6 .c3", ".r7 .c9, .r7 .c10, .r7 .c11", ".r6 .c7, .r6 .c8, .r6 .c9, .r6 .c10, .r6 .c11", ".r7 .c1, .r7 .c2, .r7 .c3, .r7 .c4", ".r7 .c5, .r7 .c6, .r7 .c7, .r7 .c8", ".r6 .c4, .r6 .c5, .r6 .c6", ".r9 .c1, .r9 .c2, .r9 .c3, .r9 .c4, .r9 .c5", ".r8 .c1, .r8 .c2, .r8 .c3, .r8 .c4, .r8 .c5", ".r5 .c8, .r5 .c9, .r5 .c10, .r5 .c11", ".r10 .c1, .r10 .c2, .r10 .c3", ".r8 .c6, .r8 .c7, .r8 .c8, .r8 .c9, .r8 .c10, .r8 .c11", ".r9 .c6, .r9 .c7, .r9 .c8, .r9 .c9, .r9 .c10, .r9 .c11"]

    if (35 > minutes) {
        let elements = document.querySelectorAll(".r6 .c1, .r6 .c2, .r6 .c3, .r7 .c9, .r7 .c10, .r7 .c11, .r6 .c7, .r6 .c8, .r6 .c9, .r6 .c10, .r6 .c11, .r7 .c1, .r7 .c2, .r7 .c3, .r7 .c4, .r7 .c5, .r7 .c6, .r7 .c7, .r7 .c8, .r6 .c4, .r6 .c5, .r6 .c6, .r9 .c1, .r9 .c2, .r9 .c3, .r9 .c4, .r9 .c5, .r8 .c1, .r8 .c2, .r8 .c3, .r8 .c4, .r8 .c5, .r5 .c8, .r5 .c9, .r5 .c10, .r5 .c11, .r10 .c1, .r10 .c2, .r10 .c3, .r8 .c6, .r8 .c7, .r8 .c8, .r8 .c9, .r8 .c10, .r8 .c11, .r9 .c6, .r9 .c7, .r9 .c8, .r9 .c9, .r9 .c10, .r9 .c11");
        elements.forEach(element => element.classList.remove('fireUp'));
        elements = document.querySelectorAll(hoursDSarray[hours12-1]);
        elements.forEach(element => element.classList.add('fireUp'));
    } else if (hours12 == 12) {
        let elements = document.querySelectorAll(".r6 .c1, .r6 .c2, .r6 .c3, .r7 .c9, .r7 .c10, .r7 .c11, .r6 .c7, .r6 .c8, .r6 .c9, .r6 .c10, .r6 .c11, .r7 .c1, .r7 .c2, .r7 .c3, .r7 .c4, .r7 .c5, .r7 .c6, .r7 .c7, .r7 .c8, .r6 .c4, .r6 .c5, .r6 .c6, .r9 .c1, .r9 .c2, .r9 .c3, .r9 .c4, .r9 .c5, .r8 .c1, .r8 .c2, .r8 .c3, .r8 .c4, .r8 .c5, .r5 .c8, .r5 .c9, .r5 .c10, .r5 .c11, .r10 .c1, .r10 .c2, .r10 .c3, .r8 .c6, .r8 .c7, .r8 .c8, .r8 .c9, .r8 .c10, .r8 .c11, .r9 .c6, .r9 .c7, .r9 .c8, .r9 .c9, .r9 .c10, .r9 .c11");
        elements.forEach(element => element.classList.remove('fireUp'));
        elements = document.querySelectorAll(hoursDSarray[0]);
        elements.forEach(element => element.classList.add('fireUp'));
    } else {
        let elements = document.querySelectorAll(".r6 .c1, .r6 .c2, .r6 .c3, .r7 .c9, .r7 .c10, .r7 .c11, .r6 .c7, .r6 .c8, .r6 .c9, .r6 .c10, .r6 .c11, .r7 .c1, .r7 .c2, .r7 .c3, .r7 .c4, .r7 .c5, .r7 .c6, .r7 .c7, .r7 .c8, .r6 .c4, .r6 .c5, .r6 .c6, .r9 .c1, .r9 .c2, .r9 .c3, .r9 .c4, .r9 .c5, .r8 .c1, .r8 .c2, .r8 .c3, .r8 .c4, .r8 .c5, .r5 .c8, .r5 .c9, .r5 .c10, .r5 .c11, .r10 .c1, .r10 .c2, .r10 .c3, .r8 .c6, .r8 .c7, .r8 .c8, .r8 .c9, .r8 .c10, .r8 .c11, .r9 .c6, .r9 .c7, .r9 .c8, .r9 .c9, .r9 .c10, .r9 .c11");
        elements.forEach(element => element.classList.remove('fireUp'));
        elements = document.querySelectorAll(hoursDSarray[hours12]);
        elements.forEach(element => element.classList.add('fireUp'));
    }


    // minutes
    // O'Clock
    if (5 > minutes && minutes >= 0) {
        let elements = document.querySelectorAll(".r10 .c6, .r10 .c7, .r10 .c8, .r10 .c9, .r10 .c10, .r10 .c11");
        elements.forEach(element => element.classList.add('fireUp'));
    } else {
        let elements = document.querySelectorAll(".r10 .c6, .r10 .c7, .r10 .c8, .r10 .c9, .r10 .c10, .r10 .c11");
        elements.forEach(element => element.classList.remove('fireUp'));
    }


    //Half
    if (35 > minutes && minutes >= 30) {
        let elements = document.querySelectorAll(".r4 .c1, .r4 .c2, .r4 .c3, .r4 .c4");
        elements.forEach(element => element.classList.add('fireUp'));
    } else {
        let elements = document.querySelectorAll(".r4 .c1, .r4 .c2, .r4 .c3, .r4 .c4");
        elements.forEach(element => element.classList.remove('fireUp'));
    }
    
    //Past
    if (35 > minutes && minutes >= 5) {
        let elements = document.querySelectorAll(".r5 .c1, .r5 .c2, .r5 .c3, .r5 .c4");
        elements.forEach(element => element.classList.add('fireUp'));
    } else {
        let elements = document.querySelectorAll(".r5 .c1, .r5 .c2, .r5 .c3, .r5 .c4");
        elements.forEach(element => element.classList.remove('fireUp'));
    }
    
    //to
    if (60 > minutes && minutes >= 35) {
        let elements = document.querySelectorAll(".r4 .c10, .r4 .c11");
        elements.forEach(element => element.classList.add('fireUp'));
    } else {
        let elements = document.querySelectorAll(".r4 .c10, .r4 .c11");
        elements.forEach(element => element.classList.remove('fireUp'));
    }

    // Twenty
    if (30 > minutes && minutes >= 20) {
        let elements = document.querySelectorAll(".r3 .c1, .r3 .c2, .r3 .c3, .r3 .c4, .r3 .c5, .r3 .c6");
        elements.forEach(element => element.classList.add('fireUp'));
    } else if (45 > minutes && minutes >= 35) {
        let elements = document.querySelectorAll(".r3 .c1, .r3 .c2, .r3 .c3, .r3 .c4, .r3 .c5, .r3 .c6");
        elements.forEach(element => element.classList.add('fireUp'));
    } else {
        let elements = document.querySelectorAll(".r3 .c1, .r3 .c2, .r3 .c3, .r3 .c4, .r3 .c5, .r3 .c6");
        elements.forEach(element => element.classList.remove('fireUp'));
    }
    
    // Quarter
    if (20 > minutes && minutes >= 15) {
        let elements = document.querySelectorAll(".r2 .c3, .r2 .c4, .r2 .c5, .r2 .c6, .r2 .c7, .r2 .c8, .r2 .c9");
        elements.forEach(element => element.classList.add('fireUp'));
    } else if (50 > minutes && minutes >= 45) {
        let elements = document.querySelectorAll(".r2 .c3, .r2 .c4, .r2 .c5, .r2 .c6, .r2 .c7, .r2 .c8, .r2 .c9");
        elements.forEach(element => element.classList.add('fireUp'));
    } else {
        let elements = document.querySelectorAll(".r2 .c3, .r2 .c4, .r2 .c5, .r2 .c6, .r2 .c7, .r2 .c8, .r2 .c9");
        elements.forEach(element => element.classList.remove('fireUp'));
    }
    
    //Ten
    if (15 > minutes && minutes >= 10) {
        let elements = document.querySelectorAll(".r4 .c6, .r4 .c7, .r4 .c8");
        elements.forEach(element => element.classList.add('fireUp'));
    } else if (55 > minutes && minutes >= 50) {
        let elements = document.querySelectorAll(".r4 .c6, .r4 .c7, .r4 .c8");
        elements.forEach(element => element.classList.add('fireUp'));
    } else {
        let elements = document.querySelectorAll(".r4 .c6, .r4 .c7, .r4 .c8");
        elements.forEach(element => element.classList.remove('fireUp'));
    }

    //Five
    if ((10 > minutes && minutes >= 5) || (minutes >= 55)) {
        let elements = document.querySelectorAll(".r3 .c7, .r3 .c8, .r3 .c9, .r3 .c10");
        elements.forEach(element => element.classList.add('fireUp'));
    } else if ((30 > minutes && minutes >= 25) || (40 > minutes && minutes >= 35)) {
        let elements = document.querySelectorAll(".r3 .c7, .r3 .c8, .r3 .c9, .r3 .c10");
        elements.forEach(element => element.classList.add('fireUp'));
    } else {
        let elements = document.querySelectorAll(".r3 .c7, .r3 .c8, .r3 .c9, .r3 .c10");
        elements.forEach(element => element.classList.remove('fireUp'));
    }
}
setInterval('lightSwitch()',1000);
