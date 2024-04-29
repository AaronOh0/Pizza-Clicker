window.onload = oppstart;

let pizzas = 0;

let clicker = 0;
let clickerMultiplier = 1.1;
let clickerPrice = 25;

let ovens = 0;
let OvenFarm = 5;
let ovenPrice = 150;

let pepperoni = 0;
let pepperoniMultiplier = 1.5;
let pepperoniPrice = 500;

function oppstart() {
  document.getElementById("pizza-button").onclick = pizza;
  document.getElementById("clicker-buy").onclick = clickerfarm;
  document.getElementById("oven-buy").onclick = BuyOven;
  document.getElementById("pepperoni-buy").onclick = buyPepperoni;
  setInterval(addPizzasFromOvens, 1000); // Call addPizzasFromOvens every second
}

function pizza() {
  pizzas += Math.pow(clickerMultiplier, clicker);
  pizzas += Math.pow(pepperoniMultiplier, pepperoni);
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

function BuyOven() {
  if (pizzas >= ovenPrice) {
    ovens++;
    pizzas -= ovenPrice;
    ovenPrice = ovenPrice * 1.3;
    document.getElementById("oven-price").innerHTML = ovenPrice;
    document.getElementById("oven-quantity").innerHTML = ovens;
    document.getElementById("pizzas").innerHTML = pizzas.toFixed(2);
  } else {
    alert("Du har ikke nokk pizzas for å kjøpe en Oven");
  }
}

function addPizzasFromOvens() {
  pizzas += ovens * 2.5;
  PizzaprSec = ovens * 2.5;
  document.getElementById("pizzas").innerHTML = pizzas.toFixed(2);
  document.getElementById("pizza-per-sec").innerHTML = PizzaprSec;
}

function buyPepperoni() {
  if (pizzas >= pepperoniPrice) {
    pepperoni++;
    pizzas -= pepperoniPrice;
    pepperoniPrice = pepperoniPrice * 1.5;
    document.getElementById("pepperoni-quantity").innerHTML = clicker;
    document.getElementById("pepperoni-price").innerHTML = pepperoniPrice;
    document.getElementById("pizzas").innerHTML = pizzas.toFixed(2);
  } else {
    alert("Du har ikke nokk pizzas for å kjøpe en pepperoni!");
  }
}
