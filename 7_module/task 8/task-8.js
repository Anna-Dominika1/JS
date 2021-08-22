const refs = {
    render: document.querySelector('[data-action="render"]'),
    destroy: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector("#boxes"),

}



const createBoxes = (number) => {
    number = Number.parseInt(number = document.querySelector("#controls > input").value)
    let size = 30;

    for (let i = 0; i < number; i++) {
        const string = `
<div style="width: ${size}px; height: ${size}px; background-color:rgb(${random()}, ${random()}, ${random()}"></div>`;
        refs.boxes.insertAdjacentHTML("beforeend", string);
        size += 10;
        console.log('Створився DIV та змінився його колір,розмір!!!');
    }
};
const destroyBoxes = () => {
    refs.boxes.textContent = "";
    console.log('Видалився DIV!!!');
}

const random = () => {
    return Math.floor(Math.random() * 256);
}

refs.render.addEventListener("click", createBoxes);
refs.destroy.addEventListener("click", destroyBoxes);