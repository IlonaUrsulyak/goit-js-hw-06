// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.


const validatorEl = document.querySelector('#validation-input');
const inputLengthEl = validatorEl.dataset.length;

validatorEl.addEventListener('blur', onInputBlur );

function onInputBlur (event) {
    if (event.currentTarget.value.length === Number(inputLengthEl)){
       event.currentTarget.classList.remove('invalid');
        event.currentTarget.classList.add('valid');
    } else {
        event.currentTarget.classList.remove('valid');  
        event.currentTarget.classList.add('invalid');   
    };
}
