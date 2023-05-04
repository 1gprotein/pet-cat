"use strict";
const NOMEDOGATO = localStorage.getItem("nomeGato");

const imagem = document.getElementById("imgGato");
const caixaTexto = document.getElementById("text"); 
const popUp = document.getElementById("pop-up"); 

let gatoDormindo = false;

document.querySelector(".titulo").innerText += ` ${NOMEDOGATO}!`; //Atualização do título
inicializaStatus();

document.getElementById("conversar").addEventListener("click", function () {
  let textoUsuario = document.getElementById("mensagem");
  if (!textoUsuario.value) {
    window.alert("You have not entered anything in the text field.");
    return;
  }
  voceDiz(textoUsuario.value);
  const respostaGato = [
    "Miau.",
    "Miau?",
    "Miiiiaaaauuuu",
    "Miaauuu!",
    "Miiiaaaaaaauuuuuuuu.",
    "Miau!Miau!Miau!",
    "Miau, miau, miau.",
    "Miau miau?",
    "Miaaaau",
    "Miau miau miau miau.",
    "Miauu",
    "PRRRRRRRRRRRRR",
    "mrrrrp :3 miau"
  ];
  if (gatoDormindo) {
    aviso(`${NOMEDOGATO} is sleeping.`);
    return;
  }
  gatoDiz(elementoAleatorio(respostaGato));
  textoUsuario.value = "";
});

//Event listeners

//alimentar
document.getElementById("btn-alimentar").addEventListener("click", function () {
  if (gatoDormindo) {
    aviso(`${NOMEDOGATO} is sleeping.`);
    return;
  }
  atualizaStatus(COMIDA, document.getElementById("s-alimentar"));
  aviso(`you fed ${NOMEDOGATO}.`);
});

//BEBIDA
document
  .getElementById("btn-dar-bebida")
  .addEventListener("click", function () {
    if (gatoDormindo) {
      aviso(`${NOMEDOGATO} is sleeping.`);
      return;
    }
    atualizaStatus(BEBIDA, document.getElementById("s-bebida"));
    aviso(`you gave ${NOMEDOGATO} to drink.`);
  });

//brincar
document.getElementById("btn-brincar").addEventListener("click", function () {
  if (gatoDormindo) {
    aviso(`${NOMEDOGATO} is sleeping`);
    return;
  }
  atualizaStatus(BRINQUEDOS, document.getElementById("s-brincar"));
  aviso(`you played a game with ${NOMEDOGATO}.`);
});

//carinho
document.getElementById("btn-carinho").addEventListener("click", function () {
  if (gatoDormindo) {
    aviso(`${NOMEDOGATO} is sleeping
    .`);
    return;
  }
  const valorCarinho = Math.floor(Math.random() * 10 + 1);
  const texto = document.getElementById("s-carinho");
  if (valorCarinho < 3) {
    texto.innerText = String.fromCodePoint("0x1f63f");
  } else if (valorCarinho < 6) {
    aviso(`${NOMEDOGATO} doesnt  want to cuddle try again later`);
    texto.innerText = String.fromCodePoint("0x1f63e");
  } else if (valorCarinho <= 9) {
    aviso(`you were good to ${NOMEDOGATO}.`);
    texto.innerText = String.fromCodePoint("0x1f638");
    gatoDiz("PRRR");
  } else {
    aviso(`You took PERFECT CARE of ${NOMEDOGATO}.`);
    texto.innerText = String.fromCodePoint("0x1f63b");
    gatoDiz("PRRRRRRRPRRRRRPRRRRRRRR");
  }
});

//dormir/acordar
document.getElementById("btn-acordar").addEventListener("click", function () {
  const acordado = "0x1f63a";
  const dormindo = "0x1f4a4";
  const texto = document.getElementById("acordar");
  if (gatoDormindo) {
    texto.innerText = String.fromCodePoint(acordado);
    gatoDormindo = false;
    imagem.src = `Imagens/${elementoAleatorio(fotos)}.png`;
    aviso(`${NOMEDOGATO} woke up.`);
  } else {
    texto.innerText = String.fromCodePoint(dormindo);
    gatoDormindo = true;
    imagem.src = "https://github.com/1gprotein/pet-cat/blob/main/Imagens/Dormindo.png?raw=true";
    aviso(`${NOMEDOGATO} went to sleep.`);
  }
});

document.getElementById("limpar-chat").addEventListener("click", function () {
  caixaTexto.innerHTML = `<h3>Talk to the cat!</h3></div>`;
});
