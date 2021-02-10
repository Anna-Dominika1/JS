let montch;
const montchs = prompt("Введіть мову з поданих прикладів:ua,en,ru,fr і тоді Ви дізнаєтесь як буде по цих мовах Січень");

if (montchs === 'Введіть місяць') {
  montch = 'montch';

}
else if (montchs === 'ua') {
    montch = 'Січень';
  }
   else if (montchs === 'en') {
  montch = 'Januar';
} else if (montchs === 'ru') {
  montch = 'Январь';
}

else if (montchs === 'fr') {
    montch = 'Janvier';
  }
   else {
  console.log('Виникла помилка');
}

console.log(montch);