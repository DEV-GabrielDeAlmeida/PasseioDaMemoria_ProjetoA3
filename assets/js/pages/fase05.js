const playerSpan = document.querySelector(".player-span");

window.onload = () => {
  const playerGet = localStorage.getItem("playerName");

  playerSpan.innerHTML = playerGet;
};

// Função para funcionar o jogo
const grid = document.querySelector(".grid");

const puzzles = [
  "usa01",
  "usa02",
  "usa03",
  "usa04",
  "usa05",
  "usa06",
  "usa07",
  "usa08",
  "usa09",
  "usa10",
  "usa11",
  "usa12",
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
      alert("Parabens!");
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

  // front.style.backgroundImage = `url('../../files/img/puzzels01/${puzzle}.png')`;
  front.style.backgroundImage = `url('/assets/files/img/puzzels05/${puzzle}.png')`;

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

loadGame();
