const credits = 23580;

const pricePerDroid = prompt(`Скільки дроїдів Ви хочете придбати?`);


 if (pricePerDroid === null || pricePerDroid == null) {
      alert( 'Скасовано користувачем!' ); 
      console.log( 'Скасовано користувачем!' );
    }

else if ( credits >= pricePerDroid ) {
    console.log(`Ви купили ${pricePerDroid} дроїдів на суму ${pricePerDroid * 3000}`) 
    console.log(`Все добре!Знімаємо кошти.На вашому рахунку залишилось ${credits - pricePerDroid * 3000} кредитів.`)
}

else {
       console.log(`На рахунку недостатньо коштів для проведення операції!`)
     }