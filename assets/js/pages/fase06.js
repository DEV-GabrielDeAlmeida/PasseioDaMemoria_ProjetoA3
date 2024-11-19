const playerSpan = document.querySelector('.player-span');

window.onload = () => {
    const playerGet = localStorage.getItem('playerName');

    playerSpan.innerHTML = playerGet;
}