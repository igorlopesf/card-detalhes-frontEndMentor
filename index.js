const nome = document.querySelector("#nomeForm");
const resultNome = document.querySelector(".nome");
const numero = document.querySelector(".numeroForm");
const resultNumero = document.querySelector(".numero");
const cvc = document.querySelector("#cvc");
const resultCvc = document.querySelector(".codigo");
const dataa = document.querySelector("#dt");
const resultDt = document.querySelector(".data");
const botao = document.querySelector("#btn");
const mascara = ["SEU NOME","0000 0000 0000 0000","AAA"];

nome.addEventListener('input', function() {
    resultNome.textContent = this.value.toUpperCase();

    replaceHolder(nome, resultNome,0);
})

numero.addEventListener('input', function() {
    resultNumero.textContent = this.value;

    replaceHolder(numero,resultNumero,1);
})

cvc.addEventListener('input', function(){
    resultCvc.textContent = this.value;

    replaceHolder(cvc,resultCvc,2);
})

dataa.addEventListener('input', function(){
    resultDt.textContent = this.value;
})

botao.addEventListener('click', function(){
    console.log("teste");
})

function replaceHolder(info,result,indexMascara){
    if (info.value == ""){
        result.textContent=mascara[indexMascara];
    }
}