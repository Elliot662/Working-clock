setInterval(theTime, 100)
function theTime() {
    let time = new Date()
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    let ampm = "error"

    if (hour < 12) {
        ampm = "AM"
    } else if (hour == 12 && min == 0 && sec == 0) {
        ampm = "AM"
    } else if (hour == 12) {
        ampm = "PM"
    } else if (hour > 12) {
        hour -= 12
        ampm = "PM"
    } else if (hour == 0) {
        hour = 12
        ampm = "AM"
    } else {
        "Error"
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let theClock = `${hour}:${min}:${sec} ${ampm}`

    document.getElementById("clock").innerHTML = theClock
}
theTime()