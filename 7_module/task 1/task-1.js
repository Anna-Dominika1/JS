const categoriesRef = document.querySelector("#categories");
const itemRef = document.querySelectorAll(".item");
console.log(`У списку ${itemRef.length} категорії`);
itemRef.forEach((item) => {
    console.log(`Категорія: ${item.querySelector(".item > h2").textContent}`);
    console.log(`Кількість елементів: ${item.querySelectorAll("li").length}`)
});