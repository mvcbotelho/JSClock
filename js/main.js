const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;

    const minutes = now.getMinutes();
    const minutesDeg = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDeg}deg)`;

    const hourDeg = ((minutes / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    console.log(minutes, seconds);
}

setInterval(setDate, 1000);