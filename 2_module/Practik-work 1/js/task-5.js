const styles = ['Джаз' , 'Блюз'];

console.log(styles)

styles.push('Рок-н-ролл');
console.log(styles); 

styles[1] = 'Класика';
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift('Реп' , 'Реггі');
console.log(styles);