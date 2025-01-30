const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  if (!movieLists[i]) return; // Ensure movieLists[i] exists

  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  const ratio = Math.floor(window.innerWidth / 270);
  const maxClicks = itemNumber - ratio; // Maximum clicks allowed before reset
  
  arrow.addEventListener("click", () => {
    if (clickCounter < maxClicks) {
      clickCounter++;
      movieLists[i].style.transform = `translateX(-${clickCounter * 270}px)`;
    } else {
      clickCounter = 0; // Reset to first position
      movieLists[i].style.transform = `translateX(0px)`;
    }
  });
});

// TOGGLE
const ball = document.querySelector(".toggle-ball");
if (ball) {
  const items = document.querySelectorAll(
    ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
  );

  ball.addEventListener("click", () => {
    items.forEach((item) => {
      item.classList.toggle("active");
    });
    ball.classList.toggle("active");
  });
}
