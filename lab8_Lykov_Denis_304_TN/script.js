let expected = 1;
let timer;
let timeLeft = 60;
const attempts = [];
let gameActive = true;

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  return '#' + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join('');
}

function generateGrid() {
  const container = document.getElementById('game-field');
  container.innerHTML = '';
  expected = 1;
  timeLeft = 60;
  gameActive = true;
  document.getElementById('message').textContent = '';
  document.getElementById('timer').textContent = timeLeft;

  const numbers = Array.from({ length: 25 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);

  numbers.forEach(n => {
    const div = document.createElement('div');
    div.textContent = n;
    div.style.fontSize = (12 + Math.random() * 18) + 'px';
    div.style.color = getRandomColor();
    div.addEventListener('click', () => {
      if (!gameActive) return;

      const val = parseInt(div.textContent);
      if (val === expected) {
        div.classList.add('selected');
        expected++;
        if (expected > 25) {
          gameActive = false;
          clearInterval(timer);
          showMessage("Вітаємо! Ви виграли!", "green");
          recordResult("Успіх", 60 - timeLeft);
        }
      } else {
        showMessage("Не вірна цифра");
      }
    });
    container.appendChild(div);
  });

  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      if (expected <= 25) {
        gameActive = false;
        showMessage("Час вийшов!");
        recordResult("Не встиг", null);
      }
    }
  }, 1000);
}

function showMessage(text, color = 'red') {
  const msg = document.getElementById('message');
  msg.textContent = text;
  msg.style.color = color;
}

function recordResult(status, time) {
  attempts.push({
    name: `гра${attempts.length + 1}`,
    time: time,
    success: status === 'Успіх'
  });

  const sorted = [...attempts]
    .filter(a => a.success)
    .sort((a, b) => a.time - b.time);

  const bestTime = sorted[0]?.time;
  const secondTime = sorted[1]?.time;

  const table = document.querySelector('#stats tbody');
  table.innerHTML = '';
  attempts.forEach((res, i) => {
    const row = document.createElement('tr');
    const timeCell = res.success ? res.time : '—';
    row.innerHTML = `<td>${res.name}</td><td>${timeCell}</td>`;

    if (res.success && res.time === bestTime) {
      row.classList.add('best');
    } else if (res.success && res.time === secondTime) {
      row.classList.add('second');
    }

    table.appendChild(row);
  });
}

document.getElementById('restart').addEventListener('click', generateGrid);
window.onload = generateGrid;
