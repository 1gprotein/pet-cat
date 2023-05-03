const humorGato = function () {
  return String.fromCodePoint(elementoAleatorio(GATOREACOES));
};

const voceDiz = function (texto) {
  //mensagem do usuário no chat
  caixaTexto.innerHTML += `<p class = "mensagem-usuario">You: ${texto}</p>`;
};

const gatoDiz = function (texto) {
  //mensagem do gato no chat
  caixaTexto.innerHTML += `<p class = "mensagem-gato">${NOMEDOGATO}: ${texto}</p>`;
};
const aviso = function (texto) {
  //aviso no chat
  caixaTexto.innerHTML += `<p class = "mensagem-aviso">${texto}</p>`;
};

const elementoAleatorio = function (vetorElementos) {
  return vetorElementos[Math.floor(Math.random() * vetorElementos.length)];
};

const inicializaStatus = function () {
  const status = document.querySelectorAll(".status");
  status.forEach((texto) => {
    texto.innerText = humorGato();
    imagem.src = `Imagens/${elementoAleatorio(fotos)}.png`;
  });
  document.getElementById("acordar").innerText = String.fromCodePoint(0x1f63a);
};

const atualizaStatus = function (escolherElementos, textStatus) {

  popUp.innerHTML += `<input type="button" value="Selecionar" id="fechar-pop-up" />`;
  document
    .getElementById("fechar-pop-up")
    .addEventListener("click", function () {
      popUp.classList.add("hidden");
    });

  textStatus.innerText = humorGato();
};
