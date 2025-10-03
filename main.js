"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const cart = document.getElementById("hpa-carts");
  console.log("Elemento encontrado:", cart);
  if (!cart) return;
  cart.addEventListener("click", (e) => {
    e.preventDefault();
    window.open("/main.html");
  });
});
