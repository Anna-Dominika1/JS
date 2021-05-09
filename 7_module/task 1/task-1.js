console.log("Категорія:")

const item = document.querySelectorAll('.item')

console.log(`У списку ${item.length} категорії`)

item.forEach(i => {console.log(`Категорія: ${i.querySelector(".item > h2").textContent}`)})