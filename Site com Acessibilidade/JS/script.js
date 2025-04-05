document.getElementById("contrasteBtn").addEventListener("click", function () {
  document.body.classList.toggle("alto-contraste");
});

document.getElementById("caixaAltaBtn").addEventListener("click", function () {
  document.body.classList.toggle("caixa-alta");
});

let leituraAtivada = false;
let utterance;
document.getElementById("leituraBtn").addEventListener("click", function () {
  const paragrafos = document.querySelectorAll(".leitura-texto");

  leituraAtivada = !leituraAtivada;

  if (leituraAtivada) {
    alert("Leitura de texto ativada!");
    paragrafos.forEach(function (paragrafo) {
      paragrafo.addEventListener("mouseover", lerTexto);
      paragrafo.addEventListener("mouseout", pararLeitura);
    });
  } else {
    alert("Leitura de texto desativada!");
    pararLeitura();
    paragrafos.forEach(function (paragrafo) {
      paragrafo.removeEventListener("mouseover", lerTexto);
      paragrafo.removeEventListener("mouseout", pararLeitura);
    });
  }
});

function lerTexto(event) {
  if (utterance) {
    window.speechSynthesis.cancel();
  }

  const texto = event.target.innerText;
  utterance = new SpeechSynthesisUtterance(texto);
  window.speechSynthesis.speak(utterance);
}

function pararLeitura() {
  if (utterance) {
    window.speechSynthesis.cancel();
  }
}
