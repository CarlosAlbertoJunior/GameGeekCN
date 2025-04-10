const perguntas = [
    {
      pergunta: "Qual o nome do bruxo protagonista da saga escrita por J.K. Rowling?",
      opcoes: ["Harry Potter", "Gandalf", "Merlin", "Dumbledore"],
      correta: 0,
      valor: 10
    },
    {
      pergunta: "Qual é o verdadeiro nome do Homem-Aranha original?",
      opcoes: ["Peter Parker", "Clark Kent", "Tony Stark", "Bruce Wayne"],
      correta: 0,
      valor: 20
    },
    {
      pergunta: "Qual o nome do planeta natal do Superman?",
      opcoes: ["Terra", "Asgard", "Krypton", "Vulcano"],
      correta: 2,
      valor: 30
    },
    {
      pergunta: "Qual personagem dos Vingadores usa um martelo como arma principal?",
      opcoes: ["Hulk", "Capitão América", "Thor", "Homem de Ferro"],
      correta: 2,
      valor: 50
    },
    {
      pergunta: "No universo de 'O Senhor dos Anéis', quem é o portador original do Um Anel?",
      opcoes: ["Frodo", "Bilbo", "Gollum", "Sauron"],
      correta: 3,
      valor: 75
    },
    {
      pergunta: "Qual é o nome do anime em que os personagens usam pokébolas?",
      opcoes: ["Digimon", "Pokémon", "Yu-Gi-Oh!", "Naruto"],
      correta: 1,
      valor: 100
    },
    {
      pergunta: "Em 'Star Wars', qual é o nome do pai de Luke Skywalker?",
      opcoes: ["Obi-Wan", "Yoda", "Anakin", "Han Solo"],
      correta: 2,
      valor: 150
    },
    {
      pergunta: "No game 'The Legend of Zelda', qual o nome do protagonista jogável?",
      opcoes: ["Zelda", "Link", "Ganondorf", "Navi"],
      correta: 1,
      valor: 200
    },
    {
      pergunta: "Qual a mutação especial do Wolverine nos X-Men?",
      opcoes: ["Voo", "Superforça", "Garras retráteis", "Visão de calor"],
      correta: 2,
      valor: 250
    },
    {
      pergunta: "Qual o nome do vilão principal de 'Vingadores: Guerra Infinita'?",
      opcoes: ["Ultron", "Loki", "Thanos", "Galactus"],
      correta: 2,
      valor: 300
    },
    {
      pergunta: "Em 'Death Note', qual é o nome do shinigami que acompanha Light Yagami?",
      opcoes: ["Ryuk", "L", "Rem", "Kira"],
      correta: 0,
      valor: 350
    },
    {
      pergunta: "No universo Marvel, qual o nome real do Pantera Negra?",
      opcoes: ["M'Baku", "T'Chaka", "T'Challa", "N'Jadaka"],
      correta: 2,
      valor: 400
    },
    {
      pergunta: "Qual foi o primeiro console da Nintendo?",
      opcoes: ["Super Nintendo", "Nintendo 64", "NES", "Game Boy"],
      correta: 2,
      valor: 450
    },
    {
      pergunta: "Qual é o nome completo do protagonista de 'Breaking Bad'?",
      opcoes: ["Walter Hartwell White", "Jesse Pinkman", "Heisenberg White", "Saul Goodman"],
      correta: 0,
      valor: 500
    },
    {
      pergunta: "Em 'One Piece', qual fruta do diabo Luffy comeu?",
      opcoes: ["Hie Hie no Mi", "Mera Mera no Mi", "Gomu Gomu no Mi", "Yami Yami no Mi"],
      correta: 2,
      valor: 1000
    }
  ];
  
  const perguntasExtras = [
    { pergunta: "Qual é o maior oceano da Terra?", opcoes: ["Atlântico", "Índico", "Ártico", "Pacífico"], correta: 3 },
    { pergunta: "Quantos estados tem o Brasil?", opcoes: ["24", "25", "26", "27"], correta: 2 },
    { pergunta: "Qual o símbolo químico do ouro?", opcoes: ["Au", "Ag", "O", "Gd"], correta: 0 },
    { pergunta: "Qual o nome do martelo do Thor?", opcoes: ["Stormbreaker", "Mjolnir", "Excalibur", "Gungnir"], correta: 1 },
    { pergunta: "Quem é o criador do Facebook?", opcoes: ["Elon Musk", "Steve Jobs", "Mark Zuckerberg", "Bill Gates"], correta: 2 },
    { pergunta: "Qual país tem o formato de uma bota?", opcoes: ["Espanha", "México", "Itália", "França"], correta: 2 },
    { pergunta: "Quantos planetas existem no Sistema Solar?", opcoes: ["7", "8", "9", "10"], correta: 1 },
    { pergunta: "Quem é conhecido como pai da computação?", opcoes: ["Bill Gates", "Alan Turing", "Steve Jobs", "Tim Berners-Lee"], correta: 1 },
    { pergunta: "O que significa HTML?", opcoes: ["HyperText Markup Language", "HighText Machine Language", "Hyper Tool Multi Language", "None"], correta: 0 },
    { pergunta: "Qual é o resultado de 7 x 8?", opcoes: ["54", "56", "64", "58"], correta: 1 }
  ];
  
  let perguntaAtual = 0;
  let usouEliminacao = false;
  let pulosRestantes = 3;
  let valorAnterior = 0;
  let usouAjudaJuri = false;
  let usouAjudaDuo = false;
  let opcaoSelecionada = null; // 👈 VARIÁVEL DE CONTROLE
  
  const perguntaEl = document.getElementById("pergunta");
  const opcoesEl = document.getElementById("opcoes");
  const nextButton = document.getElementById("next");
  const resultadoEl = document.getElementById("resultado");
  const restartButton = document.getElementById("restart");
  const eliminateBtn = document.getElementById("eliminateBtn");
  const skipBtn = document.getElementById("skipBtn");
  
  
  function carregarPergunta(perguntaObj = perguntas[perguntaAtual]) {
    perguntaEl.innerHTML = `<strong>Pergunta Valendo: R$ ${perguntaObj.valor || perguntas[perguntaAtual].valor},00</strong><br><br>${perguntaObj.pergunta}`;
    opcoesEl.innerHTML = "";
    opcaoSelecionada = null; // 👈 RESET A CADA NOVA PERGUNTA
    nextButton.classList.add("hidden");
    resultadoEl.classList.add("hidden");
    restartButton.classList.add("hidden");
    document.body.classList.remove("flash-correct", "flash-wrong");
  
    perguntaObj.opcoes.forEach((opcao, index) => {
      const btn = document.createElement("button");
      btn.classList.add("option");
      btn.textContent = opcao;
      btn.onclick = () => selecionarOuConfirmar(index, perguntaObj); // 👈 NOVA FUNÇÃO
      btn.setAttribute("data-index", index);
      opcoesEl.appendChild(btn);
    });
  
    updateAjudaButtons(perguntaObj.valor);
  }
  function selecionarOuConfirmar(index, perguntaObj) {
    const botoes = document.querySelectorAll(".option");
  
    if (opcaoSelecionada === null) {
      opcaoSelecionada = index;
      botoes.forEach((btn, i) => {
        btn.classList.toggle("selected", i === index); // 👈 DESTAQUE VISUAL
      });
    } else if (opcaoSelecionada === index) {
      verificarResposta(index, perguntaObj); // 👈 CONFIRMADO, VERIFICAR
    } else {
      opcaoSelecionada = index;
      botoes.forEach((btn, i) => {
        btn.classList.toggle("selected", i === index);
      });
    }
  }
  const acertoSound = new Audio('sounds/acerto.mp3');
  const erroSound = new Audio('sounds/erro.mp3');
  const somAjudaJuri = new Audio("sounds/ajuda-juri.mp3");
  const somAjudaDuo = new Audio("sounds/ajuda-duo.mp3");
  const somAjudaPulo = new Audio("sounds/ajuda-pulo.mp3");
  const somAjudaElimina = new Audio("sounds/ajuda-elimina.mp3");
  
  
  function verificarResposta(indice, perguntaObj = perguntas[perguntaAtual]) {
    const correta = perguntaObj.correta;
    const botoes = document.querySelectorAll(".option");
  
    // Desativa todos os botões
    botoes.forEach((btn, i) => {
      btn.disabled = false;
  
      if (indice !== correta) {
        botoes[indice].classList.add("wrong"); // 👉 Mostra só a errada primeiro
      }
  
      if (i === correta) {
        setTimeout(() => {
          btn.classList.add("correct");
        }, 200);
      }
    });
  
    setTimeout(() => {
      if (indice === correta) {
        acertoSound.play(); // 🔊 SOM DE ACERTO
        document.body.classList.add("flash-correct");
        resultadoEl.innerHTML = `✅ <b>VOCÊ ACERTOU!✅</b> <br> 💰 Valor Ganho!: <strong>R$ ${perguntaObj.valor},00</strong>`;
  
        valorAnterior = perguntaObj.valor;
        nextButton.classList.remove("hidden");
      } else {
        erroSound.play(); // 🔊 SOM DE ERRO
        document.body.classList.add("flash-wrong");
        const valorFinal = valorAnterior / 2;
        resultadoEl.innerHTML = `❌ <b>VOCÊ ERROU.</b>❌<br>🪙 Você recebe <strong>R$ ${valorFinal},00</strong>.<br><strong>Fim de jogo!</strong>`;
        restartButton.classList.remove("hidden");
      }
  
      resultadoEl.classList.remove("hidden");
    }, 2000);
  }
  
  function desabilitarBotoes() {
    document.querySelectorAll(".option").forEach(btn => btn.disabled = true);
    eliminateBtn.disabled = true;
    skipBtn.disabled = true;
    document.getElementById("juriBtn").disabled = true;
    document.getElementById("duoBtn").disabled = true;
  }
  
  function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
      carregarPergunta();
    } else {
      resultadoEl.innerHTML = `🎉 Parabéns! Você venceu o jogo! <br>💰 Valor da última pergunta: <strong>R$ ${valorAnterior},00</strong>`;
      resultadoEl.classList.remove("hidden");
      restartButton.classList.remove("hidden");
      nextButton.classList.add("hidden");
    }
  }
  
  function reiniciar() {
    perguntaAtual = 0;
    usouEliminacao = false;
    pulosRestantes = 3;
    valorAnterior = 0;
    usouAjudaJuri = false;
    usouAjudaDuo = false;
  
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
    if (usouEliminacao) return;
    usouEliminacao = true;
  
    somAjudaElimina.play();
  
  
    const correta = perguntas[perguntaAtual].correta;
    const botoes = Array.from(document.querySelectorAll(".option"));
    const erradas = botoes.filter(btn => parseInt(btn.dataset.index) !== correta);
    const aRemover = erradas.sort(() => 0.5 - Math.random()).slice(0, 2);
    aRemover.forEach(btn => btn.classList.add("hidden"));
  
    updateAjudaButtons();
  }
  
  function pularPergunta() {
    if (pulosRestantes <= 0) return;
    pulosRestantes--;
  
    somAjudaPulo.play();
  
  
    const extra = perguntasExtras[Math.floor(Math.random() * perguntasExtras.length)];
    extra.valor = perguntas[perguntaAtual].valor;
    carregarPergunta(extra);
  }
  
  function ajudaJuri() {
    const btn = document.getElementById("juriBtn");
    btn.disabled = true;
    btn.classList.add("used");
    usouAjudaJuri = true;
  
    somAjudaJuri.play();
  
  }
  
  function ajudaDuo() {
    const btn = document.getElementById("duoBtn");
    btn.disabled = true;
    btn.classList.add("used");
    usouAjudaDuo = true;
  
    somAjudaDuo.play();
  
  }
 
  
  function updateAjudaButtons(valorAtual = perguntas[perguntaAtual].valor) {
    const isUltima = valorAtual === 1000;
  
    eliminateBtn.disabled = usouEliminacao || isUltima;
    eliminateBtn.classList.toggle("used", usouEliminacao || isUltima);
  
    skipBtn.textContent = `⏭️ Pular pergunta (${pulosRestantes})`;
    skipBtn.disabled = pulosRestantes <= 0 || isUltima;
    skipBtn.classList.toggle("used", pulosRestantes <= 0 || isUltima);
  
    const juriBtn = document.getElementById("juriBtn");
    juriBtn.disabled = usouAjudaJuri || isUltima;
    juriBtn.classList.toggle("used", usouAjudaJuri || isUltima);
  
    const duoBtn = document.getElementById("duoBtn");
    duoBtn.disabled = usouAjudaDuo || isUltima;
    duoBtn.classList.toggle("used", usouAjudaDuo || isUltima);
  }
  
  carregarPergunta();
  