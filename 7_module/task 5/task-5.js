const refs = {
    span: document.querySelector("#name-output"),
    input: document.querySelector('#name-input'),
}


const textContent = (e) => {

    refs.span.textContent = e.target.value

    if (refs.span.textContent.length === 0) {
        refs.span.textContent = 'незнайомцю'
    }
}





refs.input.addEventListener('input', textContent)
