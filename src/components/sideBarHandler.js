export function sideBarBtnHandler() {
  const sideBar = document.querySelector(".sideBar");
  const overlay = document.querySelector(".overlay");
  const videosncat = document.querySelector(".videosncat");
  overlay.classList.toggle("overlay_visible");
  sideBar.classList.toggle("visibleSideBar");
  sideBar.classList.toggle("hiddenSideBar");
}
