window.onload = oppstart;

let pizzas = 0;

let clicker = 0;
let clickerMultiplier = 1.1;
let clickerPrice = 25;

let clickerUpgrades = 0;
let clickerUpgradeCost = 1000;

let ovens = 0;
let OvenFarm = 2.5;
let ovenPrice = 150;

let ovenUpgrades = 0;
let ovenUpgradeCost = 1000;

let pepperoni = 0;
let pepperoniMultiplier = 1.5;
let pepperoniPrice = 500;

function oppstart() {
  document.getElementById("pizza-button").onclick = pizza;
  document.getElementById("clicker-buy").onclick = clickerfarm;
  document.getElementById("oven-buy").onclick = BuyOven;
  document.getElementById("pepperoni-buy").onclick = buyPepperoni;
  setInterval(addPizzasFromOvens, 1000); // Call addPizzasFromOvens every second
  document.getElementById("clicker-upgrades").style.display = "none";
  document.getElementById("ClickerUpgradeBuy").onclick = buyClickerUpgrades;
  document.getElementById("oven-upgrades").style.display = "none";
  document.getElementById("OvenUpgradeBuy").onclick = BuyOvenUpgrades;
}

function pizza() {
  let pizzasAdded = 1; // Base pizza per click
  pizzasAdded *= clickerMultiplier ** clicker; // Apply clicker multiplier
  pizzasAdded *= pepperoniMultiplier ** pepperoni; // Apply pepperoni multiplier
  pizzas += pizzasAdded;
  document.getElementById("pizzas").innerHTML = pizzas.toFixed(2);

  if (pizzas >= clickerUpgradeCost) {
    document.getElementById("clicker-upgrades").style.display = "block";
  } else {
    document.getElementById("clicker-upgrades").style.display = "none";
  }

  if (pizzas >= ovenUpgradeCost) {
    document.getElementById("oven-upgrades").style.display = "block";
  } else {
    document.getElementById("oven-upgrades").style.display = "none";
  }
}

function clickerfarm() {
  if (pizzas >= clickerPrice) {
    clicker++;
    pizzas -= clickerPrice;
    clickerPrice = clickerPrice * 1.5;
    document.getElementById("clicker-quantity").innerHTML = clicker;
    document.getElementById("clicker-price").innerHTML =
      clickerPrice.toFixed(2);
    document.getElementById("pizzas").innerHTML = pizzas.toFixed(2);
  } else {
    alert("Du har ikke nokk pizzas for å kjøpe en clicker!");
  }
}

function buyClickerUpgrades() {
  if (pizzas >= clickerUpgradeCost) {
    clickerUpgrades++;
    pizzas -= clickerUpgradeCost;
    clickerUpgradeCost = clickerUpgradeCost * 5;
    document.getElementById("clickerUpgradeCost").innerHTML =
      clickerUpgradeCost;
    document.getElementById("pizzas").innerHTML = pizzas.toFixed(2);
    clickerMultiplier += clickerMultiplier * 2;
  } else {
    alert("Du har ikke nokk pizzas for å kjøpe en clicker oppgradering!");
  }
}

function BuyOven() {
  if (pizzas >= ovenPrice) {
    ovens++;
    pizzas -= ovenPrice;
    ovenPrice = ovenPrice * 1.3;
    document.getElementById("oven-price").innerHTML = ovenPrice.toFixed(2);
    document.getElementById("oven-quantity").innerHTML = ovens;
    document.getElementById("pizzas").innerHTML = pizzas.toFixed(2);
  } else {
    alert("Du har ikke nokk pizzas for å kjøpe en Oven");
  }
}

function BuyOvenUpgrades() {
  if (pizzas >= ovenUpgradeCost) {
    ovenUpgrades++;
    pizzas -= ovenUpgradeCost;
    ovenUpgradeCost = ovenUpgradeCost * 2;
    document.getElementById("ovenUpgradeCost").innerHTML = ovenUpgradeCost;
    document.getElementById("pizzas").innerHTML = pizzas.toFixed(2);
    ovens += OvenFarm;
  } else {
    alert("Du har ikke nokk pizzas for å kjøpe en oven oppgradering!");
  }
}

function addPizzasFromOvens() {
  pizzas += ovens * 2 * Math.pow(2, ovenUpgrades);
  PizzaprSec = ovens * 2 * Math.pow(2, ovenUpgrades);
  document.getElementById("pizzas").innerHTML = pizzas.toFixed(2);
  document.getElementById("pizza-per-sec").innerHTML = PizzaprSec;
}

function buyPepperoni() {
  if (pizzas >= pepperoniPrice) {
    pepperoni++;
    pizzas -= pepperoniPrice;
    pepperoniPrice = pepperoniPrice * 2;
    document.getElementById("pepperoni-quantity").innerHTML = pepperoni;
    document.getElementById("pepperoni-price").innerHTML =
      pepperoniPrice.toFixed(2);
    document.getElementById("pizzas").innerHTML = pizzas.toFixed(2);
  } else {
    alert("Du har ikke nokk pizzas for å kjøpe en pepperoni!");
  }
}
