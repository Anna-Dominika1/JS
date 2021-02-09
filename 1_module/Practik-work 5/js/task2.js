let number = 10;

for (let число = 0; число < number; число += 1) {
  if (число % 2 === 0) {
    continue;
  }

  console.log('Непарне число: ', число); 

}

let i;

for (i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log( 'Парне число: ', i );
    }
  }
  