// The below function is used for to show day in alphabetically form.
const getDayName = (date) => {
    date = new Date(), locale = 'en-US'
    return date.toLocaleDateString(locale, {weekday: 'long'});
}

setInterval(() => {
    const time = document.getElementById('time');
    const day = document.getElementById('day');

    let date = new Date();
    let Day = date.getDay();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();
    let DayNight = "AM";

    if (hour > 12) {
        DayNight = "PM"
        hour = hour - 12
    }

    if (hour < 10) {
        hour = "0" + hour
    }
    if (minutes < 12) {
        minutes = "0" + minutes
    }
    if (second < 12) {
        second = "0" + second
    }

    time.textContent = `${hour} : ${minutes} : ${second} ${DayNight}`;
    day.textContent = getDayName(Day);
    
});

