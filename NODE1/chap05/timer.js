// 타이머 5
cnt = 0;
function printTime(msg) {
    console.log(msg, new Date());
    cnt += 1;
    if (cnt === 10) clearInterval(interval);
}

interval = setInterval(printTime, 1000, "1초 간격");