// Constants for game settings
const tileSpacing = 2.25; // The spacing between tiles in rem units

// Initial tile tileSequence
var tileSequence = [1, 2, 3, 4, 5, 6, 7, 8, 0];

// Initialize the game after the document has fully loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeGame(); // Set up and shuffle the game tiles

  document.addEventListener("keydown", handleKeyPress); // Listen for keyboard events to move tiles

  const resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", initializeGame); // Reset the game when the reset button is clicked
});

// Initialize and shuffle tiles until a solvable configuration is achieved
const initializeGame = () => {
  do {
    shuffleTiles();
  } while (!isSolvable()); // Ensure the shuffled tiles are in a solvable position

  updateTilePositions(); // Update the positions of the tiles on the game board
};

// Randomly shuffle the tiles in the tileSequence array
const shuffleTiles = () => {
  for (let i = tileSequence.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tileSequence[i], tileSequence[j]] = [tileSequence[j], tileSequence[i]];
  }
};

// Check if the shuffled tiles can be solved
const isSolvable = () => {
  let inversions = 0;
  for (let i = 0; i < tileSequence.length; i++) {
    for (let j = i + 1; j < tileSequence.length; j++) {
      // Count pairs of tiles (a, b) where a comes before b but a > b
      if (
        tileSequence[i] > tileSequence[j] &&
        tileSequence[i] !== 0 &&
        tileSequence[j] !== 0
      ) {
        inversions++;
      }
    }
  }
  return inversions % 2 === 0; // A puzzle is solvable if inversions are even
};

// Update tile positions on the web page according to their sequence
const updateTilePositions = () => {
  tileSequence.forEach((tileNum, index) => {
    if (tileNum !== 0) {
      const tile = document.getElementById(`tile${tileNum}`);
      tile.style.top = `${Math.floor(index / 3) * tileSpacing}rem`;
      tile.style.left = `${(index % 3) * tileSpacing}rem`;
    }
  });

  // Check if the game has been won and reset if true
  if (isGameWon()) {
    setTimeout(() => {
      alert("Congratulations! You've solved the puzzle!");
      initializeGame();
    }, 500);
  }
};

// Handle arrow key presses to move tiles
const handleKeyPress = (e) => {
  const emptyIndex = tileSequence.indexOf(0); // Find the empty space
  const row = Math.floor(emptyIndex / 3);
  const col = emptyIndex % 3;

  let targetIndex = emptyIndex; // Initialize target index of the empty space

  switch (e.key) {
    case "ArrowUp":
      if (row < 2) targetIndex = emptyIndex + 3; // Move empty space up
      break;
    case "ArrowRight":
      if (col > 0) targetIndex = emptyIndex - 1; // Move empty space right
      break;
    case "ArrowDown":
      if (row > 0) targetIndex = emptyIndex - 3; // Move empty space down
      break;
    case "ArrowLeft":
      if (col < 2) targetIndex = emptyIndex + 1; // Move empty space left
      break;
  }

  // Update the tile sequence if a valid move was made
  if (targetIndex !== emptyIndex) {
    [tileSequence[emptyIndex], tileSequence[targetIndex]] = [
      tileSequence[targetIndex],
      tileSequence[emptyIndex],
    ];
    updateTilePositions(); // Refresh the tile positions
  }
};

// Check if all tiles are in their correct sequence to determine if the game is won
const isGameWon = () => {
  return tileSequence.every(
    (tileNum, index) => tileNum === 0 || tileNum === index + 1
  );
};
