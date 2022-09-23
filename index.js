const nome = document.querySelector("#nomeForm");
const resultNome = document.querySelector(".nome");
const numero = document.querySelector("#numeroForm");
const resultNumero = document.querySelector(".numero");
const cvc = document.querySelector("#cvc");
const resultCvc = document.querySelector(".codigo");
const dataa = document.querySelector("#dt");
const resultDt = document.querySelector(".data");
const botao = document.querySelector("#btn");
const mascara = ["SEU NOME", "0000 0000 0000 0000", "AAA"];

nome.addEventListener("input", function () {
  resultNome.textContent = this.value.toUpperCase();

  replaceHolder(nome, resultNome, 0);
  validaNome(nome);
});

numero.addEventListener("input", function () {
  resultNumero.textContent = this.value;

  replaceHolder(numero, resultNumero, 1);
  validaNumero(numero);
});

cvc.addEventListener("input", function () {
  resultCvc.textContent = this.value;

  replaceHolder(cvc, resultCvc, 2);
  validaCvc(cvc);
});

dataa.addEventListener("input", function () {
  resultDt.textContent = this.value;
});

botao.addEventListener("click", function () {
  validaNumero(numero);
  validaNome(nome);
  validaCvc(cvc);
  retornaData(dataa);
});

function replaceHolder(info, result, indexMascara) {
  if (info.value == "") {
    result.textContent = mascara[indexMascara];
  }
}

function validaNome(nm) {
  const erro = document.getElementById("nomeErro");
  const borderErro = document.getElementById("nomeForm");

  if (nm.value.length < 3) {
    erro.style.display = "block";
    borderErro.style.border = "2px solid var(--redErro)";
  } else {
    erro.style.display = "none";
    borderErro.style.border = "none";
  }
}

function validaNumero(nro) {
  const erro = document.getElementById("numeroErro");
  const borderErroNro = document.getElementById("numeroForm");

  if (nro.value.length < 16) {
    erro.style.display = "block";
    borderErroNro.style.border = "2px solid var(--redErro)";
  } else {
    erro.style.display = "none";
    borderErroNro.style.border = "none";
  }
}

function validaCvc(codigo) {
  const erro = document.getElementById("cvcErro");
  const borderErro = document.getElementById("cvc");

  if (codigo.value.length < 3) {
    erro.style.display = "block";
    borderErro.style.border = "2px solid var(--redErro)";
  } else {
    erro.style.display = "none";
    borderErro.style.border = "none";
  }
}

function retornaData(dt) {
    const erro = document.getElementById("dataErro");
    const borderErro = document.getElementById("dt");
  
    const dataAtual = new Date();
    var mesAtual = dataAtual.getMonth()+1;
    var anoAtual = dataAtual.getFullYear();

    var dataInput = dt.value;
    var mesAnoInput = dataInput.split("-");
    var mesInput = parseInt(mesAnoInput[1]);
    var anoInput = parseInt(mesAnoInput[0]);

  var teste1 = mesInput+anoInput;
  var teste2 = mesAtual+anoAtual;
  /* console.log(dataAtual+"data atual");
  console.log(mesAtual+"mes atual");
  console.log(anoAtual+"ano atual");

 
  console.log(mesInput);
  console.log(anoInput);  */

 /*  if (anoInput >= anoAtual) {
    console.log("ano maior ou igual");
    if (mesInput >= mesAtual) {
        erro.style.display = "none";
        borderErro.style.border = "none";
    }
  } 

  erro.style.display = "block";
  borderErro.style.border = "2px solid var(--redErro)" */;

  

   if(teste1 >=teste2){
    console.log("top")
   }else{
    console.log("error");
   }
  
}

