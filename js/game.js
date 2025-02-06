// Пример простой игры TapFarm
let likes = 0;
let multiplier = 1;
let upgradeCost = 10;

function updateGameDisplay() {
  document.getElementById('like-counter').textContent = likes + (likes === 1 ? ' Лайк' : ' Лайков');
  document.getElementById('multiplier').textContent = multiplier;
  document.getElementById('upgrade-cost').textContent = upgradeCost;
}

function saveGame() {
  localStorage.setItem('tapfarm_likes', likes);
  localStorage.setItem('tapfarm_multiplier', multiplier);
  localStorage.setItem('tapfarm_upgradeCost', upgradeCost);
}

function loadGame() {
  const savedLikes = localStorage.getItem('tapfarm_likes');
  const savedMultiplier = localStorage.getItem('tapfarm_multiplier');
  const savedCost = localStorage.getItem('tapfarm_upgradeCost');
  if (savedLikes !== null) likes = parseInt(savedLikes);
  if (savedMultiplier !== null) multiplier = parseInt(savedMultiplier);
  if (savedCost !== null) upgradeCost = parseInt(savedCost);
  updateGameDisplay();
}

const tapArea = document.getElementById('tap-area');
tapArea.addEventListener('click', function(e) {
  likes += multiplier;
  updateGameDisplay();
  saveGame();

  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';
  const rect = tapArea.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;
  heart.style.left = (offsetX - 10) + 'px';
  heart.style.top = (offsetY - 10) + 'px';
  tapArea.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
});

function upgradeMultiplier() {
  if (likes >= upgradeCost) {
    likes -= upgradeCost;
    multiplier++;
    upgradeCost = Math.floor(upgradeCost * 1.5);
    updateGameDisplay();
    saveGame();
  } else {
    alert('Недостаточно лайков для улучшения!');
  }
}

function resetGame() {
  if (confirm('Вы уверены, что хотите сбросить прогресс?')) {
    likes = 0;
    multiplier = 1;
    upgradeCost = 10;
    updateGameDisplay();
    saveGame();
  }
}

loadGame();
