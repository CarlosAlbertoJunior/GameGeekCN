const perguntas = [
  {
    pergunta:
      "Qual o nome do bruxo protagonista da saga escrita por J.K. Rowling?",
    opcoes: ["Harry Potter", "Gandalf", "Merlin", "Dumbledore"],
    correta: 0,
    valor: 10,
  },
  {
    pergunta: "Qual é o nome do planeta natal do Goku em Dragon Ball?",
    opcoes: ["Terra", "Namekusei", "Vegeta", "Kaioshin"],
    correta: 2,
    valor: 20,
  },
  {
    pergunta: "Qual o nome do planeta natal do Superman?",
    opcoes: ["Terra", "Asgard", "Krypton", "Vulcano"],
    correta: 2,
    valor: 30,
  },
  {
    pergunta:
      "Qual personagem de 'Os Cavaleiros do Zodíaco' é o Cavaleiro de Fênix?",
    opcoes: ["Shiryu", "Ikki", "Hyoga", "Seiya"],
    correta: 1,
    valor: 50,
  },
  {
    pergunta:
      "No universo de 'O Senhor dos Anéis', quem é o portador original do Um Anel?",
    opcoes: ["Frodo", "Bilbo", "Gollum", "Sauron"],
    correta: 3,
    valor: 75,
  },
  {
    pergunta: "Em 'Stranger Things', qual é o nome do mundo invertido?",
    opcoes: ["Dark Zone", "Upside Down", "Reverse World", "Backside"],
    correta: 1,
    valor: 100,
  },
  {
    pergunta: "Em 'Star Wars', qual é o nome do pai de Luke Skywalker?",
    opcoes: ["Obi-Wan", "Yoda", "Anakin", "Han Solo"],
    correta: 2,
    valor: 150,
  },
  {
    pergunta:
      "No game 'The Legend of Zelda', qual o nome do protagonista jogável?",
    opcoes: ["Zelda", "Link", "Ganondorf", "Navi"],
    correta: 1,
    valor: 200,
  },
  {
    pergunta: "Quem é o criador da série 'Naruto'?",
    opcoes: [
      "Tite Kubo",
      "Masashi Kishimoto",
      "Akira Toriyama",
      "Eiichiro Oda",
    ],
    correta: 1,
    valor: 250,
  },
  {
    pergunta: "Em 'Fullmetal Alchemist', qual é o maior tabu da alquimia?",
    opcoes: ["Transformar ouro", "Criar armas", "Transmutar humanos", "Voar"],
    correta: 2,
    valor: 300,
  },
  {
    pergunta:
      "Em 'Death Note', qual é o nome do shinigami que acompanha Light Yagami?",
    opcoes: ["Ryuk", "L", "Rem", "Kira"],
    correta: 0,
    valor: 350,
  },
  {
    pergunta:
      "Em 'Harry Potter', qual é o nome do animal símbolo da casa Grifinória?",
    opcoes: ["Águia", "Serpente", "Texugo", "Leão"],
    correta: 3,
    valor: 400,
  },
  {
    pergunta: "Qual foi o primeiro console da Nintendo?",
    opcoes: ["Super Nintendo", "Nintendo 64", "NES", "Game Boy"],
    correta: 2,
    valor: 450,
  },
  {
    pergunta: "Qual é o nome completo do protagonista de 'Breaking Bad'?",
    opcoes: [
      "Walter Hartwell White",
      "Jesse Pinkman",
      "Heisenberg White",
      "Saul Goodman",
    ],
    correta: 0,
    valor: 500,
  },
  {
    pergunta: "Em 'One Piece', qual fruta do diabo Luffy comeu?",
    opcoes: [
      "Hie Hie no Mi",
      "Mera Mera no Mi",
      "Gomu Gomu no Mi",
      "Yami Yami no Mi",
    ],
    correta: 2,
    valor: 1000,
  },
];

const perguntasExtras = [
  {
    pergunta: "Qual é o maior oceano da Terra?",
    opcoes: ["Atlântico", "Índico", "Ártico", "Pacífico"],
    correta: 3,
  },
  {
    pergunta: "Quantos estados tem o Brasil?",
    opcoes: ["24", "25", "26", "27"],
    correta: 2,
  },
  {
    pergunta: "Em *God of War*, qual é o nome do filho de Kratos?",
    opcoes: ["Atreus", "Ares", "Zeus", "Thor"],
    correta: 0,
  },
  {
    pergunta: "Qual o nome da nave usada pelos Guardiões da Galáxia?",
    opcoes: ["Milano", "Falcon", "Normandy", "Enterprise"],
    correta: 0,
  },
  {
    pergunta:
      "Em Dragon Ball Z, qual é o nome verdadeiro do Majin Boo antes de ser corrompido?",
    opcoes: ["Kid Boo", "Uub", "Dende", "Bibidi"],
    correta: 3,
  },
  {
    pergunta: "Qual é o nome do martelo do Thor?",
    opcoes: ["Stormbreaker", "Mjolnir", "Aegis", "Excalibur"],
    correta: 1,
  },
  {
    pergunta: "Em qual filme aparece a frase 'Eu sou seu pai'?",
    opcoes: [
      "Star Wars: Episódio V",
      "Matrix",
      "Senhor dos Anéis",
      "Harry Potter e a Pedra Filosofal",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual destes é um jutsu proibido de Naruto?",
    opcoes: ["Rasengan", "Chidori", "Edo Tensei", "Kage Bunshin"],
    correta: 2,
  },
  {
    pergunta: "Quem é o criador da série One Piece?",
    opcoes: [
      "Masashi Kishimoto",
      "Akira Toriyama",
      "Eiichiro Oda",
      "Tite Kubo",
    ],
    correta: 2,
  },
  {
    pergunta:
      "Qual o nome do robô gigante controlado por crianças em 'Neon Genesis Evangelion'?",
    opcoes: ["Gundam", "Eva", "Zoid", "Jaeger"],
    correta: 1,
  },
  {
    pergunta: "Em 'O Senhor dos Anéis', quem carrega o anel até Mordor?",
    opcoes: ["Aragorn", "Frodo", "Gandalf", "Legolas"],
    correta: 1,
  },
  {
    pergunta: "Qual país tem o formato de uma bota?",
    opcoes: ["Espanha", "México", "Itália", "França"],
    correta: 2,
  },
  {
    pergunta: "Quantos planetas existem no Sistema Solar?",
    opcoes: ["7", "8", "9", "10"],
    correta: 1,
  },

  {
    pergunta: "Qual é o resultado de 7 x 8?",
    opcoes: ["54", "56", "64", "58"],
    correta: 1,
  },
];

const gameState = {
  perguntaAtual: 0,
  usouEliminacao: false,
  pulosRestantes: 3,
  valorAnterior: 0,
  usouAjudaJuri: false,
  usouAjudaDuo: false,
  opcaoSelecionada: null,
};

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const nextButton = document.getElementById("next");
const resultadoEl = document.getElementById("resultado");
const restartButton = document.getElementById("restart");
const eliminateBtn = document.getElementById("eliminateBtn");
const skipBtn = document.getElementById("skipBtn");

// Adicione verificação de carregamento dos áudios
const audios = {
  acerto: new Audio("sounds/acerto.mp3"),
  erro: new Audio("sounds/erro.mp3"),
  ajudaJuri: new Audio("sounds/ajuda-juri.mp3"),
  ajudaDuo: new Audio("sounds/ajuda-duo.mp3"),
  ajudaPulo: new Audio("sounds/ajuda-pulo.mp3"),
  ajudaElimina: new Audio("sounds/ajuda-elimina.mp3"),
};

// Pré-carregamento dos áudios
Object.values(audios).forEach((audio) => {
  audio.preload = "auto";
});

// Função auxiliar para tocar áudio com tratamento de erro
function playSound(soundName) {
  try {
    audios[soundName]
      .play()
      .catch((error) => console.warn("Erro ao tocar áudio:", error));
  } catch (_) {
    console.warn("Áudio não encontrado:", soundName);
  }
}

function carregarPergunta(perguntaObj = perguntas[gameState.perguntaAtual]) {
  try {
    if (!perguntaObj) {
      console.error("Pergunta não encontrada");
      return;
    }

    perguntaEl.innerHTML = `<strong>Pergunta Valendo: R$ ${
      perguntaObj.valor || perguntas[gameState.perguntaAtual].valor
    },00</strong><br><br>${perguntaObj.pergunta}`;

    opcoesEl.innerHTML = "";
    gameState.opcaoSelecionada = null;

    // Criar botões para cada opção
    perguntaObj.opcoes.forEach((opcao, index) => {
      const btn = document.createElement("button");
      btn.classList.add("option");
      btn.textContent = opcao;
      btn.dataset.index = index;
      btn.onclick = () => selecionarOuConfirmar(index, perguntaObj);
      opcoesEl.appendChild(btn);
    });

    // Resetar estados visuais
    nextButton.classList.add("hidden");
    resultadoEl.classList.add("hidden");
    restartButton.classList.add("hidden");
    document.body.classList.remove("flash-correct", "flash-wrong");

    updateAjudaButtons(perguntaObj.valor);
  } catch (error) {
    console.error("Erro ao carregar pergunta:", error);
  }
}

function selecionarOuConfirmar(index, perguntaObj) {
  const botoes = document.querySelectorAll(".option");

  if (gameState.opcaoSelecionada === null) {
    gameState.opcaoSelecionada = index;
    botoes.forEach((btn, i) => {
      btn.classList.toggle("selected", i === index); // 👈 DESTAQUE VISUAL
    });
  } else if (gameState.opcaoSelecionada === index) {
    verificarResposta(index, perguntaObj); // 👈 CONFIRMADO, VERIFICAR
  } else {
    gameState.opcaoSelecionada = index;
    botoes.forEach((btn, i) => {
      btn.classList.toggle("selected", i === index);
    });
  }
}

function verificarResposta(
  indice,
  perguntaObj = perguntas[gameState.perguntaAtual]
) {
  const botoes = document.querySelectorAll(".option");

  // Desabilita todos os botões imediatamente
  desabilitarBotoes();

  const botaoSelecionado = botoes[indice];
  const botaoCorreto = botoes[perguntaObj.correta];

  if (indice === perguntaObj.correta) {
    handleAcerto(botaoSelecionado, perguntaObj);
  } else {
    handleErro(botaoSelecionado, botaoCorreto);
  }
}

function desabilitarBotoes() {
  document.querySelectorAll(".option").forEach((btn) => (btn.disabled = false));
  eliminateBtn.disabled = true;
  skipBtn.disabled = true;
  document.getElementById("juriBtn").disabled = true;
  document.getElementById("duoBtn").disabled = true;
}

function handleAcerto(botaoSelecionado, perguntaObj) {
  botaoSelecionado.style.animation = "blink-green 1s 2";
  setTimeout(() => {
    botaoSelecionado.classList.add("correct");
    playSound("acerto");
    document.body.classList.add("flash-correct");
    atualizarResultado(true, perguntaObj.valor);
    nextButton.classList.remove("hidden");
    resultadoEl.classList.remove("hidden");
  }, 2000);
}

function handleErro(botaoSelecionado, botaoCorreto) {
  botaoSelecionado.style.animation = "blink-red 1s 2";
  setTimeout(() => {
    botaoSelecionado.classList.add("wrong");
    botaoCorreto.classList.add("correct");
    playSound("erro");
    document.body.classList.add("flash-wrong");
    atualizarResultado(false);
    restartButton.classList.remove("hidden");
  }, 2000);
}

function atualizarResultado(acertou, valor = 0) {
  if (acertou) {
    gameState.valorAnterior = valor;
    resultadoEl.innerHTML = `💰 VALORES:<br>
      🎯 <strong>PARAR: R$ ${gameState.valorAnterior},00</strong> |
      ❌ <strong>ERRAR: R$ ${gameState.valorAnterior / 2},00</strong>`;
  } else {
    resultadoEl.innerHTML = `❌ VOCÊ ERROU!<br>
      💰 Valor Final: <strong>R$ ${gameState.valorAnterior / 2},00</strong>`;
  }
}

function resetGame() {
  Object.assign(gameState, {
    perguntaAtual: 0,
    usouEliminacao: false,
    pulosRestantes: 3,
    valorAnterior: 0,
    usouAjudaJuri: false,
    usouAjudaDuo: false,
    opcaoSelecionada: null,
  });
}

function reiniciar() {
  resetGame();

  const juriBtn = document.getElementById("juriBtn");
  juriBtn.disabled = false;
  juriBtn.classList.remove("used");

  const duoBtn = document.getElementById("duoBtn");
  duoBtn.disabled = false;
  duoBtn.classList.remove("used");
  document.getElementById("juriBtn").disabled = false;
  document.getElementById("juriBtn").classList.remove("used");
  document.getElementById("duoBtn").disabled = false;
  document.getElementById("duoBtn").classList.remove("used");
  carregarPergunta();
}

function eliminarDuas() {
  if (gameState.usouEliminacao) return;
  gameState.usouEliminacao = true;

  playSound("ajudaElimina");

  const correta = perguntas[gameState.perguntaAtual].correta;
  const botoes = Array.from(document.querySelectorAll(".option"));
  const erradas = botoes.filter(
    (btn) => parseInt(btn.dataset.index) !== correta
  );
  const aRemover = erradas.sort(() => 0.5 - Math.random()).slice(0, 2);
  aRemover.forEach((btn) => btn.classList.add("hidden"));

  updateAjudaButtons();
}

function pularPergunta() {
  if (gameState.pulosRestantes <= 0) return;
  gameState.pulosRestantes--;

  playSound("ajudaPulo");

  const extra =
    perguntasExtras[Math.floor(Math.random() * perguntasExtras.length)];
  extra.valor = perguntas[gameState.perguntaAtual].valor;
  carregarPergunta(extra);
}

function ajudaJuri() {
  const btn = document.getElementById("juriBtn");
  btn.disabled = true;
  btn.classList.add("used");
  gameState.usouAjudaJuri = true;

  playSound("ajudaJuri");
}

function ajudaDuo() {
  const btn = document.getElementById("duoBtn");
  btn.disabled = true;
  btn.classList.add("used");
  gameState.usouAjudaDuo = true;

  playSound("ajudaDuo");
}

function updateAjudaButtons(
  valorAtual = perguntas[gameState.perguntaAtual].valor
) {
  const isUltima = valorAtual === 1000;

  eliminateBtn.disabled = gameState.usouEliminacao || isUltima;
  eliminateBtn.classList.toggle("used", gameState.usouEliminacao || isUltima);

  skipBtn.textContent = `⏭️ Pular pergunta (${gameState.pulosRestantes})`;
  skipBtn.disabled = gameState.pulosRestantes <= 0 || isUltima;
  skipBtn.classList.toggle("used", gameState.pulosRestantes <= 0 || isUltima);

  const juriBtn = document.getElementById("juriBtn");
  juriBtn.disabled = gameState.usouAjudaJuri || isUltima;
  juriBtn.classList.toggle("used", gameState.usouAjudaJuri || isUltima);

  const duoBtn = document.getElementById("duoBtn");
  duoBtn.disabled = gameState.usouAjudaDuo || isUltima;
  duoBtn.classList.toggle("used", gameState.usouAjudaDuo || isUltima);
}

function proximaPergunta() {
  gameState.perguntaAtual++;
  if (gameState.perguntaAtual < perguntas.length) {
    carregarPergunta();
  } else {
    resultadoEl.innerHTML = `🎉 Parabéns! Você completou o jogo! <br>💰 Valor acumulado: <strong>R$ ${gameState.valorAnterior},00</strong>`;
    resultadoEl.classList.remove("hidden");
    restartButton.classList.remove("hidden");
    nextButton.classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const elementos = {
    pergunta: document.getElementById("pergunta"),
    opcoes: document.getElementById("opcoes"),
    next: document.getElementById("next"),
    resultado: document.getElementById("resultado"),
    restart: document.getElementById("restart"),
    eliminate: document.getElementById("eliminateBtn"),
    skip: document.getElementById("skipBtn"),
    juri: document.getElementById("juriBtn"),
    duo: document.getElementById("duoBtn"),
  };

  // Verificação de elementos
  for (const [key, element] of Object.entries(elementos)) {
    if (!element) {
      console.error(`Elemento '${key}' não encontrado no DOM`);
      return;
    }
  }

  // Adicione os event listeners aqui
  nextButton.addEventListener("click", proximaPergunta);
  restartButton.addEventListener("click", reiniciar);
  eliminateBtn.addEventListener("click", eliminarDuas);
  skipBtn.addEventListener("click", pularPergunta);
  document.getElementById("juriBtn").addEventListener("click", ajudaJuri);
  document.getElementById("duoBtn").addEventListener("click", ajudaDuo);

  // Inicialização do jogo
  carregarPergunta();
});
