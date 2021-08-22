const refs = {
    range: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

const fontSizeRange = (event) => {
    refs.text.style.fontSize = event.currentTarget.value + 'px'

}

refs.range.addEventListener('input', fontSizeRange)