const card = document.querySelector(".card__inner")
const card1 = document.querySelector(".card__inner1")

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped')
});

card1.addEventListener("click", function (e) {
  card1.classList.toggle('is-flipped')
});