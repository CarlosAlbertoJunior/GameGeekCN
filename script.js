const perguntas = [
    {
      pergunta: "Qual o nome do bruxo protagonista da saga escrita por J.K. Rowling?",
      opcoes: ["Harry Potter", "Gandalf", "Merlin", "Dumbledore"],
      correta: 0,
      valor: 10
    },
    {
      pergunta: "Qual é o nome do planeta natal do Goku em Dragon Ball?",
      opcoes: ["Terra", "Namekusei", "Vegeta", "Kaioshin"],
      correta: 2,
      valor: 20
    },
    {
      pergunta: "Qual o nome do planeta natal do Superman?",
      opcoes: ["Terra", "Asgard", "Krypton", "Vulcano"],
      correta: 2,
      valor: 30
    },
    {
      pergunta: "Qual personagem de 'Os Cavaleiros do Zodíaco' é o Cavaleiro de Fênix?",
      opcoes: ["Shiryu", "Ikki", "Hyoga", "Seiya"],
      correta: 1,
      valor: 50
    },
    {
      pergunta: "No universo de 'O Senhor dos Anéis', quem é o portador original do Um Anel?",
      opcoes: ["Frodo", "Bilbo", "Gollum", "Sauron"],
      correta: 3,
      valor: 75
    },
    {
      pergunta: "Em 'Stranger Things', qual é o nome do mundo invertido?",
      opcoes: ["Dark Zone", "Upside Down", "Reverse World", "Backside"],
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
      pergunta: "Quem é o criador da série 'Naruto'?",
      opcoes: ["Tite Kubo", "Masashi Kishimoto", "Akira Toriyama", "Eiichiro Oda"],
      correta: 1,
      valor: 250
    },
    {
      pergunta: "Em 'Fullmetal Alchemist', qual é o maior tabu da alquimia?",
      opcoes: ["Transformar ouro", "Criar armas", "Transmutar humanos", "Voar"],
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
      pergunta: "Em 'Harry Potter', qual é o nome do animal símbolo da casa Grifinória?",
      opcoes: ["Águia", "Serpente", "Texugo", "Leão"],
      correta: 3,
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
    { pergunta: "Em *God of War*, qual é o nome do filho de Kratos?", opcoes: ["Atreus", "Ares", "Zeus", "Thor"], correta: 0, },
    { pergunta: "Qual o nome da nave usada pelos Guardiões da Galáxia?", opcoes: ["Milano", "Falcon", "Normandy", "Enterprise"], correta: 0 },
    { pergunta: "Em Dragon Ball Z, qual é o nome verdadeiro do Majin Boo antes de ser corrompido?", opcoes: ["Kid Boo", "Uub", "Dende", "Bibidi"], correta: 3 },
    { pergunta: "Qual é o nome do martelo do Thor?", opcoes: ["Stormbreaker", "Mjolnir", "Aegis", "Excalibur"], correta: 1 },
    { pergunta: "Em qual filme aparece a frase 'Eu sou seu pai'?", opcoes: ["Star Wars: Episódio V", "Matrix", "Senhor dos Anéis", "Harry Potter e a Pedra Filosofal"], correta: 0 },
    { pergunta: "Qual destes é um jutsu proibido de Naruto?", opcoes: ["Rasengan", "Chidori", "Edo Tensei", "Kage Bunshin"], correta: 2 },
    { pergunta: "Quem é o criador da série One Piece?", opcoes: ["Masashi Kishimoto", "Akira Toriyama", "Eiichiro Oda", "Tite Kubo"], correta: 2 },
    { pergunta: "Qual o nome do robô gigante controlado por crianças em 'Neon Genesis Evangelion'?", opcoes: ["Gundam", "Eva", "Zoid", "Jaeger"], correta: 1 },
    { pergunta: "Em 'O Senhor dos Anéis', quem carrega o anel até Mordor?", opcoes: ["Aragorn", "Frodo", "Gandalf", "Legolas"], correta: 1 },
    { pergunta: "Qual país tem o formato de uma bota?", opcoes: ["Espanha", "México", "Itália", "França"], correta: 2 },
    { pergunta: "Quantos planetas existem no Sistema Solar?", opcoes: ["7", "8", "9", "10"], correta: 1 },
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
  function sortearPerguntaExtra(valorAtual) {
    if (perguntasExtras.length === 0) {
      console.warn("Não há mais perguntas extras disponíveis.");
      return null;
    }
  
    const indexSorteado = Math.floor(Math.random() * perguntasExtras.length);
    const perguntaExtra = { ...perguntasExtras[indexSorteado], valor: valorAtual };
  
    // Remove a pergunta usada da lista de extras
    perguntasExtras.splice(indexSorteado, 1);
  
    return perguntaExtra;
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
    botoes.forEach((btn) => btn.disabled = false);
  
    const botaoSelecionado = botoes[indice];
    const botaoCorreto = botoes[correta];
  
    if (indice === correta) {
      // Piscar em verde
      botaoSelecionado.style.animation = "blink-green 1s 2";
      setTimeout(() => {
        botaoSelecionado.classList.add("correct");
        acertoSound.play(); // 🔊 SOM DE ACERTO
        document.body.classList.add("flash-correct");
        resultadoEl.innerHTML = `✅ <b>VOCÊ ACERTOU!✅</b> <br> 💰<strong> PARAR: R$ ${perguntaObj.valor},00 </strong>💰<br> ❌<strong> ERRAR: R$ ${(perguntaObj.valor/2)} ❌</strong>`;
        valorAnterior = perguntaObj.valor;
        nextButton.classList.remove("hidden");
        resultadoEl.classList.remove("hidden");
      }, 2000);
    } else {
      // Piscar em vermelho
      botaoSelecionado.style.animation = "blink-red 1s 2";
      setTimeout(() => {
        botaoSelecionado.classList.add("wrong");
        botaoCorreto.classList.add("correct");
        erroSound.play(); // 🔊 SOM DE ERRO
        document.body.classList.add("flash-wrong");
        const valorFinal = valorAnterior / 2;
        resultadoEl.innerHTML = `❌ <b>VOCÊ ERROU.</b>❌<br>🪙 Você recebe <strong>R$ ${valorFinal},00</strong>.<br><strong>Fim de jogo!</strong>`;
        restartButton.classList.remove("hidden");
        resultadoEl.classList.remove("hidden");
      }, 2000);
    }
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
  