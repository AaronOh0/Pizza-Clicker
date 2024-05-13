window.onload = oppstart;

let pizzas = 0;

let clicker = 0;
let clickerMultiplier = 1.1;
let clickerPrice = 25;

let clickerUpgrades = 0;
let clickerUpgradeCost = 1000;

let ovens = 0;
let OvenFarm = 2.5;
let ovenPrice = 100;

let ovenUpgrades = 0;
let ovenUpgradeCost = 1000;

let pepperoni = 0;
let pepperoniMultiplier = 2;
let pepperoniPrice = 500;

let onkel = 0;
let onkelFarm = 10;
let onkelPrice = 1000;

let onkelUpgrades = 0;
let onkelUpgradeCost = 10000;

function oppstart() {
  document.getElementById("pizza-button").onclick = pizza;
  document.getElementById("clicker-buy").onclick = clickerfarm;
  document.getElementById("oven-buy").onclick = BuyOven;
  document.getElementById("pepperoni-buy").onclick = buyPepperoni;
  setInterval(addPizzasFromOvens, 1000);
  document.getElementById("clicker-upgrades").style.display = "none";
  document.getElementById("ClickerUpgradeBuy").onclick = buyClickerUpgrades;
  document.getElementById("oven-upgrades").style.display = "none";
  document.getElementById("OvenUpgradeBuy").onclick = BuyOvenUpgrades;
  document.getElementById("pps-outer").style.display = "none";
  document.getElementById("onkel-upgrades").style.display = "none";
  document.getElementById("onkel-buy").onclick = buyOnkel;
  document.getElementById("onkelUpgradeBuy").onclick = buyOnkelUpgrades;
  setInterval(addpizzasFromOnkel, 1000);
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

  if (pizzas >= onkelUpgradeCost) {
    document.getElementById("onkel-upgrades").style.display = "block";
  } else {
    document.getElementById("onkel-upgrades").style.display = "none";
  }

  if (pizzas == NaN) {
    alert("Du Ødla spillet, Gratulerer!");
  }

  updatePps();
}

function clickerfarm() {
  if (pizzas >= clickerPrice) {
    clicker++;
    pizzas -= clickerPrice;
    clickerPrice = clickerPrice * 1.15;
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
    clickerMultiplier += clickerMultiplier * 1.5;
  } else {
    alert("Du har ikke nokk pizzas for å kjøpe en clicker oppgradering!");
  }
}

function BuyOven() {
  if (pizzas >= ovenPrice) {
    ovens++;
    pizzas -= ovenPrice;
    ovenPrice = ovenPrice * 1.15;
    document.getElementById("oven-price").innerHTML = ovenPrice.toFixed(2);
    document.getElementById("oven-quantity").innerHTML = ovens;
    document.getElementById("pizzas").innerHTML = pizzas.toFixed(2);
    updatePps();
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

function updatePps() {
  if (ovens > 0) {
    document.getElementById("pps-outer").style.display = "block";
  }

  if (onkel > 0) {
    document.getElementById("pps-outer").style.display = "block";
  }

  let PizzaperSec = ovenPerSec + onkelPrSec;

  document.getElementById("pizza-per-sec").innerHTML = PizzaperSec.toFixed(2);
}

function addPizzasFromOvens() {
  pizzas += ovens * 1.5 * Math.pow(1.5, ovenUpgrades);
  ovenPerSec = ovens * 1.5 * Math.pow(1.5, ovenUpgrades);
  document.getElementById("pizzas").innerHTML = pizzas.toFixed(2);
  updatePps();
}

function buyPepperoni() {
  if (pizzas >= pepperoniPrice) {
    pepperoni++;
    pizzas -= pepperoniPrice;
    pepperoniPrice = pepperoniPrice * 1.15;
    document.getElementById("pepperoni-quantity").innerHTML = pepperoni;
    document.getElementById("pepperoni-price").innerHTML =
      pepperoniPrice.toFixed(2);
    document.getElementById("pizzas").innerHTML = pizzas.toFixed(2);
    updatePps();
  } else {
    alert("Du har ikke nokk pizzas for å kjøpe en pepperoni!");
  }
}

function buyOnkel() {
  if (pizzas >= onkelPrice) {
    onkel++;
    pizzas -= onkelPrice;
    onkelPrice = onkelPrice * 1.15;
    document.getElementById("onkel-quantity").innerHTML = onkel;
    document.getElementById("onkel-price").innerHTML = onkelPrice.toFixed(2);
    document.getElementById("pizzas").innerHTML = pizzas.toFixed(2);
    updatePps();
  } else {
    alert("Du har ikke nokk pizzas for å kjøpe en onkel");
  }
}

function buyOnkelUpgrades() {
  if (pizzas >= onkelUpgradeCost) {
    onkelUpgrades++;
    pizzas -= onkelUpgradeCost;
    onkelUpgradeCost = onkelUpgradeCost * 5;
    document.getElementById("onkelUpgradeCost").innerHTML = onkelUpgradeCost;
    document.getElementById("pizzas").innerHTML = pizzas.toFixed(2);
    onkel += onkelFarm;
  } else {
    alert("Du har ikke nokk pizzas for å kjøpe en onkel oppgradering!");
  }
}

function addpizzasFromOnkel() {
  pizzas += onkel * 10 * Math.pow(10, onkelUpgrades);
  onkelPrSec = onkel * 10 * Math.pow(10, onkelUpgrades);
  document.getElementById("pizzas").innerHTML = pizzas.toFixed(2);
  updatePps();
}