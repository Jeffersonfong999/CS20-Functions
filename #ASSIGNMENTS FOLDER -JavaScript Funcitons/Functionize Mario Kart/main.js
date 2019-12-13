// Mario Kart Item Box Simulator
'use strict';

// Global Variables
let numBanana = 0;
let numGreenShell = 0;
let numStar = 0;
let numGoldenMushroom = 0;
let numBulletBill = 0;

let resultsEl = document.getElementById('results');

// Event Listeners
document.getElementById('mainImg').addEventListener('click', collectItem);

// Event Function
function collectItem() {
    // Simulate the result of getting one item

    // Get racer position
    let position = Number(document.getElementById('position').value);

    // Simulate results for based on racer position
    if (position >= 1 && position <= 6) {
        itemcount(0.45, 0.80, 0.95, 0.99);
      
    } else if (position >= 7 && position <= 12) {
        itemcount(0.05, 0.1, 0.35, 0.75);
      
    }
}

//Helper Function
function itemcount(bananaCount, greenshellCount, starCount, goldenmushroomCount) {
    let randNum = Math.random();
    if (randNum < bananaCount) {
        // Banana
        numBanana++;
        document.getElementById('banana').innerHTML = numBanana;
        resultsEl.innerHTML += '<img src="images/banana.jpg">';
    } else if (randNum < greenshellCount) {
        // Green Shell
        numGreenShell++;
        document.getElementById('green-shell').innerHTML = numGreenShell;
        resultsEl.innerHTML += '<img src="images/greenshell.jpg">';
    } else if (randNum < starCount) {
        // Star
        numStar++;
        document.getElementById('star').innerHTML = numStar;
        resultsEl.innerHTML += '<img src="images/star.jpg">';
    } else if (randNum < goldenmushroomCount) {
        // Golden Mushroom
        numGoldenMushroom++;
        document.getElementById('golden-mushroom').innerHTML = numGoldenMushroom;
        resultsEl.innerHTML += '<img src="images/goldenmushroom.jpg">';
    } else {
        // Bullet Bill
        numBulletBill++;
        document.getElementById('bullet-bill').innerHTML = numBulletBill;
        resultsEl.innerHTML += '<img src="images/bulletbill.jpg">';
    }
    
}

