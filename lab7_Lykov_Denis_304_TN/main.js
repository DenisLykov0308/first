function showDateTime() {
  const now = new Date();

  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');

  const days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'пʼятниця', 'субота'];
  const months = [
    'січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
    'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'
  ];

  const dayOfWeek = days[now.getDay()];
  const day = now.getDate().toString().padStart(2, '0');
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const result = `${hours}:${minutes}:${seconds}, ${dayOfWeek} , ${day} ${month} ${year} року`;
  console.log(result);
  return result;
}
console.log("Завдання 1:")
showDateTime();
//
function getFormattedDateTime() {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const year = now.getFullYear();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}

function getHint(diff) {
  if (diff === 0) return 'вгадано!';
  else if (diff <= 2) return 'гаряче!';
  else if (diff <= 5) return 'тепло.';
  else return 'холодно.';
}

function playGame() {
  const target = Math.floor(Math.random() * 51); // 0–50
  let attempts = 0;
  let guessed = false;

  while (!guessed) {
    let input = prompt("Введіть число від 0 до 50:");

    if (input === null) {
      alert("Гру перервано.");
      return;
    }

    const guess = parseInt(input, 10);
    const timestamp = getFormattedDateTime();
    attempts++;

    if (isNaN(guess) || guess < 0 || guess > 50) {
      alert("Введіть ціле число в межах від 0 до 50!");
      continue;
    }

    const diff = Math.abs(target - guess);
    const hint = getHint(diff);

    if (diff === 0) {
      console.log(`${timestamp} Спроба ${attempts}: число ${guess} – вірно`);
      alert(`За ${attempts} спроб ви вгадали число ${target}!`);
      guessed = true;
    } else {
      console.log(`${timestamp} Спроба ${attempts}: число ${guess} – не вірно`);
      alert(hint);
    }
  }

  if (confirm("Бажаєте зіграти ще раз?")) {
    playGame();
  } else {
    alert("Дякуємо за гру!");
  }
}
console.log("Завдання 2:")
playGame();

