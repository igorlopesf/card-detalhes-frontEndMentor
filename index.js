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
    validaNome(nome);
})

numero.addEventListener('input', function() {
    resultNumero.textContent = this.value;

    replaceHolder(numero,resultNumero,1);
    validaNumero(numero);
})

cvc.addEventListener('input', function(){
    resultCvc.textContent = this.value;

    replaceHolder(cvc,resultCvc,2);
})

dataa.addEventListener('input', function(){
    resultDt.textContent = this.value;
})

botao.addEventListener('click', function(){
    validaNome(nome);
})

function replaceHolder(info,result,indexMascara){
    if (info.value == ""){
        result.textContent=mascara[indexMascara];
    }
}

function validaNome(nm){

    const erro = document.getElementById("nomeErro");
    const borderErro = document.getElementById("nomeForm");

    nm.addEventListener('input', function(){
        
        if( nm.value.length < 3 ){
            erro.style.display = "block";
            borderErro.style.border = "2px solid var(--redErro)";
            
        }else { 
            erro.style.display = "none";
            borderErro.style.border = "none";
        }
    })
}

function validaNumero (nro){

    const erro = document.getElementById("numeroErro");
    const borderErroNro = document.getElementById("numeroForm");

    nro.addEventListener('input', function(){
        if( nro.value.length < 3){
            erro.style.display = "block";
          /*   borderErroNro.style.background = "2px solid var(--redErro)"; */
            
        }else { 
            erro.style.display = "none";
            /* borderErroNro.style.border = "none"; */
        }
    })
}