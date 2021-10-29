
function timeline(){

    let time = new Date();

document.getElementById('time').innerText = time;

localStorage.setItem('Time', time);

}



setInterval(timeline, 100);



function underdevelopment() {

    alert("This Option is Under Development & it will be launching soon");

    console.warn("This Option is Under Development & it will be launching soon")

}