setInterval(printCurrentTime, 1000);

function printCurrentTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}