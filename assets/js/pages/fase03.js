// Função para funcionar o jogo
const grid = document.querySelector(".grid");
const playerSpan = document.querySelector(".player-span");
const timer = document.querySelector(".timer-span");
const footer = document.querySelector(".game-footer");

const puzzles = [
  "china01",
  "china02",
  "china03",
  "china04",
  "china05",
  "china06",
  "china07",
  "china08",
  "china09",
  "china10",
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

let firstCard = "";
let secondCard = "";

const checkEndGame = () => {
  const cartasViradas = document.querySelectorAll(".desligaCarta");

  if (cartasViradas.length === puzzles.length * 2) {
    // INSERIR O QUE DEVE APARECER AO VENCER O JOGO
    setTimeout(() => {
      clearInterval(this.loop);
      alert(
        `Parabéns, ${playerSpan.innerHTML}! Seu tempo foi de ${timer.innerHTML} segundos.`
      );
      footer.style.display = "flex";
    }, 500);
  }
};

const comparaCarta = () => {
  const firstPuzzle = firstCard.getAttribute("data-puzzle");
  const secondPuzzle = secondCard.getAttribute("data-puzzle");

  if (firstPuzzle === secondPuzzle) {
    firstCard.firstChild.classList.add("desligaCarta");
    secondCard.firstChild.classList.add("desligaCarta");

    firstCard = "";
    secondCard = "";

    checkEndGame();
  } else {
    setTimeout(() => {
      firstCard.classList.remove("viraCarta");
      secondCard.classList.remove("viraCarta");

      firstCard = "";
      secondCard = "";
    }, 500);
  }
};

const revelaCarta = ({ target }) => {
  if (target.parentNode.className.includes("viraCarta")) {
    return;
  }

  if (firstCard === "") {
    target.parentNode.classList.add("viraCarta");
    firstCard = target.parentNode;
  } else if (secondCard === "") {
    target.parentNode.classList.add("viraCarta");
    secondCard = target.parentNode;

    comparaCarta();
  }
};

const createCard = (puzzle) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url('/assets/files/img/puzzels03/${puzzle}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revelaCarta);
  card.setAttribute("data-puzzle", puzzle);

  return card;
};

const loadGame = () => {
  const duplicatePuzzles = [...puzzles, ...puzzles];

  const shuffledArray = duplicatePuzzles.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((puzzle) => {
    const card = createCard(puzzle);
    grid.appendChild(card);
  });
};

const startTimer = () => {
  this.loop = setInterval(() => {
    const tempoAtual = Number(timer.innerHTML);
    timer.innerHTML = tempoAtual + 1;

    if (tempoAtual <= 30) {
      console.log("cor verde");
    } else if (tempoAtual > 30 && tempoAtual <= 60) {
      console.log("cor laranja");
    } else if (tempoAtual > 60) {
      console.log("cor vermelha");
    }
  }, 1000);
};

window.onload = () => {
  const playerGet = localStorage.getItem("playerName");
  playerSpan.innerHTML = playerGet;

  startTimer();
  loadGame();
};
