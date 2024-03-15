// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Get the query parameters from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const numBoxes = parseInt(urlParams.get('numBoxes')) || 2; // Default to 2 boxes

  // Generate boxes based on the parameter
  generateBoxes(numBoxes);
});

function generateBoxes(numBoxes) {
  const hiddenContainer = document.getElementById('boxContainer');

  for (let i = 1; i <= numBoxes; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.textContent = `Box ${i}`;

    hiddenContainer.appendChild(box);
  }
}

// JavaScript for Box 1 on Main Page
function box1Clicked() {
  // Customize the action for Box 1 click
  const customNames = ['fact','jvjha'];
  generateBoxesWithCustomNames(customNames);
}

// JavaScript for Box 2 on Main Page
function box2Clicked() {
  // Customize the action for Box 2 click
  const customNames = ["Custom Box X", "Custom Box Y", "Custom Box Z"];
  generateBoxesWithCustomNames(customNames);
}

function generateBoxesWithCustomNames(customNames) {
  const hiddenContainer = document.getElementById('boxContainer');
  hiddenContainer.innerHTML = ''; // Clear previous boxes

  for (let i = 0; i < customNames.length; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.textContent = customNames[i];

    hiddenContainer.appendChild(box);
  }
}
