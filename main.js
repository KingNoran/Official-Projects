/*Goals:

    Calendar:
        Make navigation (arrows) work
        Make the Calendar body ~!~
        Make it responsive
        Make it dynamic
        Make clock
    Event:
        Make assignable events
        Make it responsive
        Make it dynamic
        Give it a video/image background
*/



        //CALENDAR SECTION

let defaultdate = new Date();
let year = defaultdate.getFullYear();
let month = defaultdate.getMonth();


const calendar_setter = document.querySelector('#calendar-dates');
const nav = document.querySelectorAll('#month-container span');
const daysetter = document.querySelector('.day');
const datesetter = document.querySelector('.date');

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const setdates = function(){
    
    setyear(); // Sets year
    setmonth(); // Sets month

    // day = days of the week; a string
    // date = count of day in a month; a number

    // Get first day of the month (will be our start in the forloop)
    let firstday = new Date(year, month, 1).getDay();
    // Get last date of the month (will be our limit in the forloop)
    let lastdate = new Date(year, month + 1, 0).getDate();
    // Get last day of the month (will be used to get the first week of the next month)
    let lastday = new Date(year, month, lastdate).getDay();
    // Get last date of the previous month (will be used to get previous month last dates)
    let lastmonthdate = new Date (year, month, 0).getDate();
    // Set a placeholder for HTML
    let placeholder = "";

    // Add dates (last week) of previous month first and make them inactive
    for (let i = firstday; i > 0; i--) {
        placeholder += `<li class="inactive">${lastmonthdate - i + 1}</li>`;
    }


    // Loop to add the dates of the current month
    for (let i = 1; i <= lastdate; i++) {
        // Make boolean that checks if the month highlighted is the current month
        let isMonth = new Date().getMonth() === month && year === new Date().getFullYear();
        // Make boolean that checks if the date generated is the current date
        let isToday = i === defaultdate.getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
        if (isToday === true){
            // if the generated date is today, make it active
            placeholder += `<li class="active">${i}</li>`;
        } else {
            if (isMonth === true){
                // if the highlighted month is the current month in the current year, make the dates active
                placeholder += `<li class="active-month">${i}</li>`
            } else {
                // if it isn't, make it inactive
                placeholder += `<li class="inactive-month">${i}</li>`;
            }
        }
    }
 
    // Loop to add the first dates (first week) of the next month and make them inactive
    for (let i = lastday; i < 6; i++) {
        placeholder += `<li class="inactive">${i - lastday + 1}</li>`
    }

    calendar_setter.innerHTML = placeholder;
    
}

const setyear = function(){
    
    const yeasetter = document.querySelector('#year');
    yeasetter.innerHTML = `${year}`;
}

const setmonth = ()=>{
    
    // Set current month
    let curmonth = month; // current month
    const curmonthsetter = document.querySelector('.month.current');
    curmonthsetter.innerHTML = `<li class="month current">${months[curmonth]}</li>`;
    // Set previous month
    const prevmonthsetter = document.querySelector('.month.previous');
    let prevmonth = curmonth - 1;
    if (prevmonth < 0){
        prevmonth = 11;
    }
    prevmonthsetter.innerHTML = `<li class="month previous">${months[prevmonth]}</li>`;
    // Set next month
    const nextmonthsetter = document.querySelector('.month.next');
    let nextmonth = curmonth + 1;
    if (nextmonth > 11){
        nextmonth = 0;
    }
    nextmonthsetter.innerHTML = `<li class="month next">${months[nextmonth]}</li>`;
}


nav.forEach(arrow => {
    arrow.addEventListener("click", () => {
        month = arrow.id === "previous" ? month - 1 : month + 1;
        
        if (month < 0 || month > 11){
            defaultdate = new Date(year, month, new Date().getDate());
            year = defaultdate.getFullYear();
            month = defaultdate.getMonth();
        } else {
            defaultdate = new Date();
        }
        setdates();
    })
})



            //EVENT SECTION

const setdaysndate = function(){
    daysetter.innerHTML = `${days[new Date().getDay()]}`;
    datesetter.innerHTML = `${months[new Date().getMonth()]} ${new Date().getDate()}`;
}

// Form vars
const myForm = document.querySelector('#add-event');
const monthInput = document.querySelector('#month-add-event');
const dayInput = document.querySelector('#day-add-event');
const description = document.querySelector('#description');
const msg = document.querySelector('.msg');
const eventList = document.querySelector('#event-list');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    let validmonth = months.includes(monthInput.value);
    let validday = dayInput.value <= new Date(year, monthInput.value + 1, 0).getDate() || dayInput.value > 0;
    if(monthInput.value === '' || dayInput.value === '' || description.value === ''){
        msg.classList.add('error');
        msg.classList.add('visible');
        msg.classList.remove('invisible');
        msg.innerHTML = "Please enter all fields";

        setTimeout(() => {
            msg.classList.remove('error');
            msg.classList.remove('visible');
            msg.classList.add('invisible');
        }, 3000);
    } else if (validmonth === false){
        msg.classList.add('error');
        msg.classList.add('visible');
        msg.classList.remove('invisible');
        msg.innerHTML = "Please enter a valid month";

        setTimeout(() => {
            msg.classList.remove('error');
            msg.classList.remove('visible');
            msg.classList.add('invisible');
        }, 3000);
    }else if (validday === false){
        msg.classList.add('error');
        msg.classList.add('visible');
        msg.classList.remove('invisible');
        msg.innerHTML = "Please enter a valid date";

        setTimeout(() => {
            msg.classList.remove('error');
            msg.classList.remove('visible');
            msg.classList.add('invisible');
        }, 3000);
    }else {

        const li = document.createElement('li');

        const div = document.createElement('div');
        div.classList.add('date-spec');

        const monthspec = document.createElement('p');
        monthspec.appendChild(document.createTextNode(`${monthInput.value}`));
        monthspec.classList.add('date');

        const dayspec = document.createElement('p');
        dayspec.appendChild(document.createTextNode(`${dayInput.value}`));
        dayspec.classList.add('date');

        div.appendChild(monthspec);
        div.appendChild(dayspec);

        li.appendChild(div);

        const p = document.createElement('p');
        p.appendChild(document.createTextNode(`${description.value}`));
        li.appendChild(p);

        eventList.appendChild(li);

        //Clear fields
        monthInput.value = '';
        dayInput.value = '';
        description.value = '';
    }
}

setInterval(()=>{
    const clock = document.querySelector('#clock');
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if(hours > 12){
        hours = hours - 12;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    if(hours > 12){
        minutes = minutes + " PM";
    } else {
        minutes = minutes + " AM";
    }
    clock.innerHTML = `${hours}:${minutes}`;
});

            // CALLS
setdates();
setdaysndate();

