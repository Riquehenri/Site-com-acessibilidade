//Arruma o contraste
document.getElementById("contrasteBtn").addEventListener("click", function () {
  document.body.classList.toggle("alto-contraste");
});
//----------------------------------------------------------
//Deixa em caixa alta
document.getElementById("caixaAltaBtn").addEventListener("click", function () {
  document.body.classList.toggle("caixa-alta");
});

//---------------------------------------------------------------
// Variável para controlar o estado da leitura
let leituraAtivada = false;
let utterance; // Variável para armazenar a utterance atual
// Ativar Leitura de Texto
document.getElementById("leituraBtn").addEventListener("click", function () {
  const paragrafos = document.querySelectorAll(".leitura-texto");

  // Alternar o estado da leitura
  leituraAtivada = !leituraAtivada;

  // Mensagem de alerta
  if (leituraAtivada) {
    alert("Leitura de texto ativada!");
    paragrafos.forEach(function (paragrafo) {
      paragrafo.addEventListener("mouseover", lerTexto);
      paragrafo.addEventListener("mouseout", pararLeitura);
    });
  } else {
    alert("Leitura de texto desativada!");
    pararLeitura(); // Para a leitura se estava em andamento
    paragrafos.forEach(function (paragrafo) {
      paragrafo.removeEventListener("mouseover", lerTexto);
      paragrafo.removeEventListener("mouseout", pararLeitura);
    });
  }
});

// Função para ler o texto
function lerTexto(event) {
  // Interrompe a leitura anterior, se houver
  if (utterance) {
    window.speechSynthesis.cancel();
  }

  const texto = event.target.innerText;
  utterance = new SpeechSynthesisUtterance(texto);
  window.speechSynthesis.speak(utterance);
}

// Função para parar a leitura
function pararLeitura() {
  if (utterance) {
    window.speechSynthesis.cancel();
  }
}
//--------------------------------------------------------------
