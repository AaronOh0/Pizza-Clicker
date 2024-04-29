window.onload = oppstart;

let pizzas = 0;

let clicker = 0;
let clickerMultiplier = 1.1;
let clickerPrice = 25;

let ovens = 0;
let OvenFarm = 5;
let ovenPrice = 100;

function oppstart() {
  document.getElementById("pizza-button").onclick = pizza;
  document.getElementById("clicker-buy").onclick = clickerfarm;
  document.getElementById("oven-buy").onclick = Ovens;
}

function pizza() {
  pizzas += Math.pow(clickerMultiplier, clicker);
  document.getElementById("pizzas").innerHTML = pizzas.toFixed(2);
}

function clickerfarm() {
  if (pizzas >= clickerPrice) {
    clicker++;
    pizzas -= clickerPrice;
    clickerPrice = clickerPrice * 1.5;
    document.getElementById("clicker-quantity").innerHTML = clicker;
    document.getElementById("clicker-price").innerHTML = clickerPrice;
    document.getElementById("pizzas").innerHTML = pizzas.toFixed(2);
  } else {
    alert("Du har ikke nokk pizzas for å kjøpe en clicker!");
  }
}

function Ovens() {}
