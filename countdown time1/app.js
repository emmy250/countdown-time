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

  const giveAway = document.querySelector(".giveaway");
  const deadline = document.querySelector(".deadline");
  const items = document.querySelectorAll(".deadline-format  h4");

  let futureDate = new Date(2022,3 ,15,0,0);
  console.log(futureDate);

  const year = futureDate.getFullYear();
  const hour = futureDate.getHours();
  const min = futureDate.getMinutes();
  const secs = futureDate.getSeconds();
  
  let month = futureDate.getMonth();
  month = months[month];

  const date = futureDate.getDate();

  const weekday = weekdays[futureDate.getDay()];

  giveAway.textContent = `give away ends on ${weekday},${date},${month},${year} ${hour}:${min}`;

  // future time in ms

  const futuretime = futureDate.getTime();
  //console.log(futuretime);

  function getRemainingTime(){
    const today = new Date().getTime();
    const t = futuretime - today;
    
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) /oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let secs = Math.floor((t % oneMinute) /1000);

    //set values array:
    const values = [days,hours,minutes,secs];

    function format(item){
      if(item <10){
        return item = `0${item}`;
      }
      return item;
    }

    items.forEach(function(item,index){
      item.innerHTML = values[index];
    }); 
    if(t<0){
      clearInterval(countdown);
      deadline.innerHTML = `<h4 claas"expired">sorry, this giveaway 
      has expired</h4>`
    }
  }
 
      // countdown
      let countdown = setInterval(getRemainingTime, 1000);
  
  getRemainingTime();