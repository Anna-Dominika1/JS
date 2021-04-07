let prices;
const country = prompt('Введіть країну в яку хочете щось надіслати!');

switch (country.toLowerCase()) {
  case 'китай':
    prices = 100;
    console.log('Доставка в Китай буде коштувати 100 кредитів.')
    break;

  case 'чилі':
    prices = 250;
    console.log('Доставка в Чилі буде коштувати 250 кредитів.')
    break;

  case 'австралія':
    prices = 170;
    console.log('Доставка в Астралію буде коштувати 170 кредитів.')
    break;
   
    case 'індія':
      prices = 80;
      console.log('Доставка в Індію буде коштувати 80 кредитів.')
      break;

      case 'ямайка':
      prices = 120;
      console.log('Доставка в Ямайку буде коштувати 120 кредитів.')
      break;

  default:
    console.log('У вашій країні доставка недоступна');
}
