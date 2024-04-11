const menu = document.getElementById("menu");
const navList = document.getElementById("navList");

const menuBar = document.getElementById("menuBar");
const crossMenu = document.getElementById("crossMenu");

menu.addEventListener("click", (e) => {
  if (navList.style.left && navList.style.left !== "-100vw") {
    navList.style.left = "-100vw";
    crossMenu.style.display = "none";
    menuBar.style.display = "block";
  } else {
    navList.style.left = "0";
    crossMenu.style.display = "block";
    menuBar.style.display = "none";
  }
});

const vide = document.getElementById("video");
window.addEventListener("load", () => {
  vide.muted = true;
  vide.play();
});