const playerSpan = document.querySelector(".player-span");

window.onload = () => {
  const playerGet = localStorage.getItem("playerName");

  playerSpan.innerHTML = playerGet;
};

// Função para gerar as cartas
const grid = document.querySelector(".grid");

const puzzles = [
  "sunset01",
  "sunset02",
  "sunset03",
  "sunset04",
  "sunset05",
  "sunset06",
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

let firstCard = "";
let secondCard = "";

const comparaCarta = () => {
  const firstPuzzle = firstCard.getAttribute("data-puzzle");
  const secondPuzzle = secondCard.getAttribute("data-puzzle");

  if (firstPuzzle === secondPuzzle) {
    console.log("acertou!");
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
  }
};

const createCard = (puzzle) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  // front.style.backgroundImage = `url('../../files/img/puzzels01/${puzzle}.png')`;
  front.style.backgroundImage = `url('/assets/files/img/puzzels01/${puzzle}.png')`;

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
