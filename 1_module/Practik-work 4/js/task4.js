const random = Math.random() * (5 - 1);

if (random === 0){
    console.log("Число 0");
}

else if(random === 1){
  console.log("Число 1")
}
else if(random === 2){
  console.log("Число 2");
}
else if (random === 3){
  console.log("Число 3");
}
else if(random === 4){
  console.log("Число 4");
}
else if(random === 5){
  console.log("Число 5");
}

else{
  console.log('Виникла помилка')
}

console.log(Math.round(random));

