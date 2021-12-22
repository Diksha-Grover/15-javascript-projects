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
  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll('.deadline-format h4');
  
  let tempDate = new Date();
  // new Date() creates a new date object with the current date and time
  // new Date(year, month, day, hours, minutes, seconds, milliseconds)
  // eg: Tue Dec 21 2021 12:10:10 GMT+0530 (India Standard Time)
  let tempYear = tempDate.getFullYear();
  // getFullYear() returns the full year (4 digits) of a date.
  let tempMonth = tempDate.getMonth();
  // getMonth() returns the month (0 to 11) of a date
  let tempDay = tempDate.getDate();
  // getDate() returns the day of the month (from 1 to 31) of a date
  // months are ZERO index based;
  const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 59, 00);
  
  // let futureDate = new Date(2021, 3, 24, 11, 30, 0); 
  // new Date(year, month, date, hours, minutes, seconds)
  
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  //getHours() returns the hour (0 to 23) of a date.
  const minutes = futureDate.getMinutes();
  // getMinutes() returns the minutes (0 to 59) of a date
  // var declarations are globally scoped or function scoped while let and const are block scoped. 
  // generally, whenever you see {curly brackets}, it is a block. 
  // var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.


  let month = futureDate.getMonth();
  month = months[month];
  // const month = months[futureDate.getMonth()];
  // since we are updating month. That's why we have taken let
  const weekday = weekdays[futureDate.getDay()];
  // getDay() method returns the day of the week (0 to 6) of a date
  const date = futureDate.getDate();
  giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
  
  const futureTime = futureDate.getTime();
  function getRemainingTime() {
    const today = new Date().getTime();
    // getTime() returns the number of milliseconds since January 1, 1970 00:00:00.
  
    const t = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    const hours = Math.floor((t % oneDay) / oneHour);
    // it means whatever is the time diff divide it with oneDay get the remainder
    // then divide it with oneHour
    // (t= time diff) 
    const minutes = Math.floor((t % oneHour) / oneMinute);
    const seconds = Math.floor((t % oneMinute) / 1000);
  
    // set values array
    const values = [days, hours, minutes, seconds];
    function format(item) {
    // this function means if we have number less than 10 then apply 0 infront of it
    // if not then return it as it is
      if (item < 10) {
        return (item = `0${item}`);
      }
      return item;
    }
  
    items.forEach(function (item, shinchan) {
      item.innerHTML = format(values[shinchan]);
      // JavaScript innerHTML property sets the HTML contents of an element on a web page
    });
  
    if (t < 0) {
      clearInterval(countdown);
      // clearInterval() method clears a timer set with the setInterval() method
      deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
    }
  }
  // countdown;
  let countdown = setInterval(getRemainingTime, 1000);
  // setInterval() method calls a function at specified intervals (in milliseconds).
  // i wanna call it on every 1000 milliseconds means 1 second
  // set initial values
  getRemainingTime();
  // we have called the function getRemainingTime();
  