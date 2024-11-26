const input = document.querySelector(".input-name");
const btnPlay = document.querySelector(".btn-play");
const btnMenu = document.querySelector(".btn-menu");

const form = document.querySelector(".form-name");

// Valida a entrada do nome do usuário
const validateInput = ({ target }) => {
  if (target.value.length > 0) {
    btnPlay.removeAttribute("disabled");
    btnMenu.removeAttribute("disabled");
  } else {
    btnPlay.setAttribute("disabled", "");
    btnMenu.setAttribute("disabled", "");
  }
};

// Envia o formulário, armazena o nome localmente e redireciona para próxima página
const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem("playerName", input.value);
  window.location = "html/fase_01_praia.html";
};

// Envia o formulário, armazena o nome localmente e redireciona para próxima página
const handleSubmit2 = (event) => {
  event.preventDefault();

  localStorage.setItem("playerName", input.value);
  window.location = "html/menu_fases.html";
};

// Verifica se já existe um nome armazenado no localStorage e preenche o campo de entrada
const loadPlayerName = () => {
  const playerName = localStorage.getItem("playerName");
  if (playerName) {
    input.value = playerName;
    validateInput({ target: input });
  }
};

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);
btnMenu.addEventListener("click", handleSubmit2);

loadPlayerName();
