const refs = {
    input: document.querySelector('#validation-input'),
}


const NumberOfCharacters = (a) => {


    if (a.target.value.length === Number.parseInt(refs.input.getAttribute('data-length'))) {
        console.log(`Ви ввеле правильну кількість,${a.target.value.length}`);
        refs.input.classList.remove('invalid')
        refs.input.classList.add('valid')

    } else if (a.target.value.length !== Number.parseInt(refs.input.getAttribute('data-length'))) {
        refs.input.classList.add('invalid')
        console.log(`Ви ввеле неправильну кількість символів,${a.target.value.length}`);
    }

}



refs.input.addEventListener('blur', NumberOfCharacters)