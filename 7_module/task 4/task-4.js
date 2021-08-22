let counterValue = 0;


const querySelectorRefs = {
    decrementRef: document.querySelector("button[data-action=decrement]"),
    valueRef: document.querySelector('#value'),
    increment: document.querySelector("button[data-action=increment]"),
}


const increment = () => {

    counterValue += 1
    querySelectorRefs.valueRef.textContent = counterValue
}




const decrementRef = () => {
    if (counterValue === 0) {
        return counterValue === 0
    }
    counterValue -= 1
    querySelectorRefs.valueRef.textContent = counterValue

}



querySelectorRefs.increment.addEventListener('click', increment)

querySelectorRefs.decrementRef.addEventListener('click', decrementRef)

