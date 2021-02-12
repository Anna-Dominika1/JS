

let counter  =  prompt("Введіть країну,в яку хочете доставити товар");

let price ;

if (counter === 'Країну не обрано') {
  price = 0;
  console.log(`Доставка в ${counter} буде коштувати ${price} кредитів.`) 
} 

else if (counter === 'Китай') {
  price = 100;

  console.log(`Доставка в ${counter} буде коштувати ${price} кредитів.`) 
}

else if (counter === 'Чилі') {
  price = 250;

  console.log(`Доставка в ${counter} буде коштувати ${price} кредитів.`) 
} 

else if (counter === 'Австралія') {
    price = 170;
    console.log(`Доставка в ${counter} буде коштувати ${price} кредитів.`) 
  }

  else if (counter === 'Індія') {
    price = 80;
    console.log(`Доставка в ${counter} буде коштувати ${price} кредитів.`) 
  }

  else if (counter === 'Ямайка') {
    price = 120;
    console.log(`Доставка в ${counter} буде коштувати ${price} кредитів.`) 
  }
 

else {
  alert("У вашій країні доставка недоступна"); 
  console.log("У вашій країні доставка недоступна");
}


