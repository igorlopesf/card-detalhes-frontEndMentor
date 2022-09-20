const nome = document.querySelector("#nomeForm");
const resultNome = document.querySelector(".nome");
const numero = document.querySelector(".numeroForm");
const resultNumero = document.querySelector(".numero");
const cvc = document.querySelector("#cvc");
const resultCvc = document.querySelector(".codigo");
const dataa = document.querySelector("#dt")
const resultDt = document.querySelector(".data");


nome.addEventListener('input', function() {
    resultNome.textContent = this.value.toUpperCase();
})

numero.addEventListener('input', function() {
    resultNumero.textContent = this.value;
})

cvc.addEventListener('input', function(){
    resultCvc.textContent = this.value;
})

dataa.addEventListener('input', function(){
    resultDt.textContent = this.value;
})




