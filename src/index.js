import "./style.scss";

const form = document.querySelector(".myForm")
const phone = document.querySelector(".input__tel");
const submit = document.querySelector(".submit__btn");

const regexp = /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/gi;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(!phone.value.match(regexp))
    console.log("inccorect");
})