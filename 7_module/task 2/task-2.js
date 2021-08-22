const ingredients = [
    "Картопля",
    "Гриби",
    "Часник",
    "Помідори",
    "Зелень",
    "Приправи",
];
const ingredientsRef = document.querySelector("#ingredients");

const a = ingredients.forEach((ingredient) => {
    const ing = document.createElement("li")
    ing.classList.add('ingredient')
    ing.textContent = ingredient
    ingredientsRef.appendChild(ing)
});




