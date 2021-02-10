const Max = prompt("Скільки років Максиму?");

const minadult = 17;

const maxadult = 60;

const minpensioner  = 61;

const maxpensioner = 100;

 if( Max <= 16){
    console.log('Максим є дитина');
  }
  if ( Max >= minadult && Max <= maxadult){
  console.log('Максим є дорослий');
}
 if( Max >= minpensioner && Max <= maxpensioner){
    console.log('Максим є пенсіонер');
  }
else {
  console.log(`Ви не ввели вік або такої категорії немає`)
}

