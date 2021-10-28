"use strict;"

var sandwich = document.getElementById("sandwich");

var listOfIngrediens = [
    { id: 1, name: "Cheese" },
    { id: 2, name: "Ham" },
    { id: 3, name: "Mayonnaise" },
    { id: 4, name: "Egg" }
];

var ingrediensToPutOnSandwich = [];

function addIngrediensToSandwich(id) {
    for (let ingrediens in listOfIngrediens) {
        if (ingrediens.id === id) {
            ingrediensToPutOnSandwich.push(ingrediens);
        }
    }
    showCurrentSandwich();
}

function showCurrentSandwich() {

    sandwich.innerHTML = "";//clear before

    for (let ingrediens in ingrediensToPutOnSandwich) {
        let layer = document.createElement("div");
        layer.classList.add(ingrediens.name);
        sandwich.appendChild(layer);
    }

}