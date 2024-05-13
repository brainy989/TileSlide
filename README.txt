Tile Slide Puzzle Game

Overview
The game is built with HTML,CSS, and JavaScript and features a basic user interface that allows players to interact through keyboard inputs.

Features
• Interactive Tile Movement: Tiles adjacent to the empty space can be moved into that space by using the arrow keys on your keyboard.
• Win Detection: The game automatically detects when the player has arranged the tiles in the correct sequence and displays a congratulatory message.
• Reset Functionality: Players can reshuffle the tiles at any time by pressing the “Reset” button.

How to Play
1. Move the Tiles: Use the arrow keys to move the tiles:
	• Arrow Up: Moves the tile below the empty space up.
	• Arrow Down: Moves the tile above the empty space down.
	• Arrow Left: Moves the tile to the right of the empty space left.
	• Arrow Right: Moves the tile to the left of the empty space right.
2. Reset the Game: If you get stuck or want to start over, click the “Reset” button to shuffle the tiles.
3. Win the Game: Arrange the tiles in numerical order from 1 to 8 from left to right and top to bottom to win.

Technical Implementation
The game is implemented in JavaScript, with the visual aspects handled by HTML and CSS.
The puzzle’s solvability is ensured through an algorithm that counts the number of inversions in the shuffled tiles, only allowing the game to start with a solvable configuration.

Total Spent Hours: 2.5 hrs
