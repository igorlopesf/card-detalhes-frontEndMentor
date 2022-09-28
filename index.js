const nome = document.querySelector("#nomeForm");
const resultNome = document.querySelector(".nome");
const numero = document.querySelector("#numeroForm");
const resultNumero = document.querySelector(".numero");
const cvc = document.querySelector("#cvc");
const resultCvc = document.querySelector(".codigo");
const mes = document.querySelector("#mesInput");
const resultMes = document.querySelector(".placeMes");
const ano = document.querySelector("#anoInput");
const resultAno = document.querySelector(".placeAno");
const botao = document.querySelector("#btn");
const mascara = ["SEU NOME", "0000 0000 0000 0000", "AAA", "00"];
const containerForm = document.querySelector(".containerForm");
const complete = document.querySelector(".complete");
const dataAtual = new Date();
var checkout = 0;

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

mes.addEventListener("input", function () {
  resultMes.textContent = this.value;
  replaceHolder(mes, resultMes, 3);
  validaMes(mes);
});

ano.addEventListener("input", function () {
  resultAno.textContent = this.value;
  replaceHolder(ano, resultAno, 3);
  validaAno(ano);
});

botao.addEventListener("click", function () {
  validaNome(nome);
  validaNumero(numero);
  validaMes(mes);
  validaAno(ano);
  validaCvc(cvc);
  
  console.log(checkout, "final");

  if(checkout == 5 ){
    containerForm.style.display= "none";
    complete.style.display="flex";
  }
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
    checkout=1;
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
    checkout++;
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
    checkout++;
  }
}

function validaMes(ms) {
  const erro = document.getElementById("dataErro");
  const borderErroMes = document.getElementById("mesInput");
  var mesAtual = dataAtual.getMonth() + 1;
  mesInt = parseInt(ms.value);

  if (mesInt < mesAtual || mesInt > 12) {
    erro.style.display = "block";
    borderErroMes.style.border = "2px solid var(--redErro)";
  } else {
    erro.style.display = "none";
    borderErroMes.style.border = "1px solid var(--violetaClaro)";
    checkout++;
  }
}

function validaAno(an) {
  const erro = document.getElementById("dataErro");
  const borderErroAno = document.getElementById("anoInput");
  var anoAtual = dataAtual.getFullYear();
  anoInt = parseInt(an.value);

  if (anoInt < anoAtual) {
    erro.style.display = "block";
    borderErroAno.style.border = "2px solid var(--redErro)";
  } else {
    erro.style.display = "none";
    borderErroAno.style.border = "1px solid var(--violetaClaro)";
    checkout++;
  }
}
