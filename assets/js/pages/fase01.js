const playerSpan = document.querySelector(".player-span");

window.onload = () => {
  const playerGet = localStorage.getItem("playerName");

  playerSpan.innerHTML = playerGet;
};

// Função para gerar as cartas
const grid = document.querySelector(".grid");

const puzzles = [
  'sunset01',
  'sunset02',
  'sunset03',
  'sunset04',
  'sunset05',
  'sunset06',
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

const createCard = (puzzle) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  // front.style.backgroundImage = `url('../../files/img/puzzels01/${puzzle}.png')`;
  front.style.backgroundImage = `url('/assets/files/img/puzzels01/${puzzle}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  return card;
};

const loadGame = () => {
  const duplicatePuzzles = [...puzzles, ...puzzles];

  const shuffledArray = duplicatePuzzles.sort();

  duplicatePuzzles.forEach((puzzle) => {

    const card = createCard(puzzle);
    grid.appendChild(card);

  });
}

loadGame();
