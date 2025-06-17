const weekInfo = {
  ua: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пʼятниця', 'Субота', 'Неділя'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};

function chooseLanguage() {
  while (true) {
    let lang = prompt('Виберіть мову: "ua" або "en"?').toLowerCase();
    if (lang === 'ua' || lang === 'en') {
      return lang;
    } else {
      alert('Неправильний ввід. Спробуйте ще раз.');
    }
  }
}

function chooseDay(lang) {
  const isUkr = lang === 'ua';
  const message = isUkr
    ? 'Введіть номер дня неділі від 1 до 7?'
    : 'Enter the day number of the week (from 1 to 7)?';

  while (true) {
    let dayNumber = parseInt(prompt(message), 10);
    if (dayNumber >= 1 && dayNumber <= 7) {
      return weekInfo[lang][dayNumber - 1];
    } else {
      alert(isUkr ? 'Неправильний номер дня. Спробуйте ще раз.' : 'Invalid day number. Try again.');
    }
  }
}
const language = chooseLanguage();
const dayName = chooseDay(language);
alert(dayName);
