const input = document.querySelector(".input-name");
const btnPlay = document.querySelector(".btn-play");
const btnMenu = document.querySelector(".btn-menu");

const form = document.querySelector(".form-name");

const validateInput = ({ target }) => {
  if (target.value.length > 0) {
    btnPlay.removeAttribute("disabled");
    btnMenu.removeAttribute("disabled");
  } else {
    btnPlay.setAttribute("disabled", "");
    btnMenu.setAttribute("disabled", "");
  }
};

const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem("playerName", input.value);
  window.location = "html/fase_01_praia.html";
};

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);
