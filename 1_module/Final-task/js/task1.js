let name = `Генератор захисного поля`;

let price = prompt("Введіть категорію,за якою хочете придбати даний товар");



switch (price) { 
    case 'free':
    price = 0;
     console.log(`Ви ще нічого не придбали`)
        break;

  case `pro`:
    price = 1000;
    console.log(`Обрано ${name}, ціна за штуку ${price} кредитів`)
    break;

  case 'premium':
    price = 2000;
    console.log(`Обрано ${name}, ціна за штуку ${price} кредитів`)
    break;

  default:
    console.log('Ви не ввели категорію,або такої категорії не існує');
}
