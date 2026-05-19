// LOADING SCREEN
window.addEventListener("load", () => {

  const loader = document.querySelector(".loader-wrapper");

  setTimeout(() => {

    loader.classList.add("fade-out");

  }, 1800);

});


// SHOW MORE BUTTON
const button = document.querySelector(".btn-show button");

button.addEventListener("click", () => {

  alert("Menampilkan lebih banyak produk...");

});


// SEARCH BOX
const searchBtn = document.getElementById("search-btn");

const searchBox = document.getElementById("searchBox");

searchBtn.addEventListener("click", (e) => {

  e.preventDefault();

  searchBox.classList.toggle("active");

});

// BUY NOW BUTTON
const buyBtn = document.querySelector(".buy-btn");

buyBtn.addEventListener("click", () => {

  buyBtn.innerHTML = "Loading...";

});

// SUBSCRIBE BUTTON
const subscribeBtn = document.querySelector(".subscribe-btn");

subscribeBtn.addEventListener("click", () => {

  subscribeBtn.innerHTML = "Subscribed ✓";

  subscribeBtn.style.background = "green";

});