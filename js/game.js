let likes = 0;
let multiplier = 1;
let upgradeCost = 10;

const likeCounter = document.getElementById("like-counter");
const tapButton = document.getElementById("tap-button");
const upgradeButton = document.getElementById("upgrade-button");
const multiplierDisplay = document.getElementById("multiplier");

function updateGameDisplay() {
    likeCounter.textContent = likes;
    multiplierDisplay.textContent = multiplier;
    upgradeButton.textContent = `Улучшить (${upgradeCost} лайков)`;
}

tapButton.addEventListener("click", function() {
    likes += multiplier;
    updateGameDisplay();
});

upgradeButton.addEventListener("click", function() {
    if (likes >= upgradeCost) {
        likes -= upgradeCost;
        multiplier++;
        upgradeCost = Math.floor(upgradeCost * 1.5);
        updateGameDisplay();
    } else {
        alert("Недостаточно лайков для улучшения!");
    }
});

updateGameDisplay();
