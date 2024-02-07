function setClock() {
  const now = new Date();

  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDeg = (hours + minutes / 60) * 30;
  const minuteDeg = (minutes + seconds / 60) * 6;
  const secondDeg = seconds * 6;

  document.querySelector('[data-hour-hand]').style.transform = `rotate(${hourDeg}deg)`;
  document.querySelector('[data-minute-hand]').style.transform = `rotate(${minuteDeg}deg)`;
  document.querySelector('[data-second-hand]').style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(setClock, 1000);
setClock();