const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

const deadline = document.querySelector('.deadline');
const giveaway = document.querySelector('.giveaway');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//let futureDate = new Date(2024,11,29,8,30,0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const day = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${day} ${weekday} ${month} ${year} ${hours}:${minutes}`;

const futureTime = futureDate.getTime();

function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    
    let days = Math.floor(t/oneDay);
    let hours = Math.floor((t%oneDay)/oneHour);
    let minutes = Math.floor((t%oneHour) /oneMinute);
    let seconds = Math.floor((t % oneMinute)/1000);

    const values = [days, hours, minutes, seconds];

    function format(item){
        if (item < 10){
            return item = `0${item}`;
        }
        return item
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    });

    if (t<0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway is over</h4>`
    };
};

let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();