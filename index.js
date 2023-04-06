const countdown = () => {
  const countDate = new Date("January 17, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // how time works?
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //calculate
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);
  // add in  HTml
  document.querySelector(".span-day").innerText = textDay;
  document.querySelector(".span-hour").innerText = textHour;
  document.querySelector(".span-minute").innerText = textMinute;
  document.querySelector(".span-second").innerText = textSecond;
  console.log(gap);
};

setInterval(countdown, 1000);
countdown();
