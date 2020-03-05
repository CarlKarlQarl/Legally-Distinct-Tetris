# !Tetris

This is the front-end repository for my Tetris clone. It was built in React, and uses a little bit of Lodash to help with objects.

For those unfamiliar with Tetris, pieces made out of four blocks will descend from the top of the board and slowly moving toward the bottom of the board. Upon colliding with the bottom of the board or another piece, they will stop moving, remain in that position, and a new piece will start moving down from the top of the board. The goal is to rotate and move the pieces into position where they complete horizontal rows across the board. Once a row is complete, it will be erased, the pile of blocks and pieces will shift down into the newly cleared space, and points will awarded. Clearing multiple lines at once will yield more points than clearing the same number of lines one at a time. As more lines are cleared, the pieces will start to descend more quickly. The game will end once the pile reaches the top of the board, or rather, when a new piece is created on top of the pile.

# Links
- Front-end Repo: https://github.com/CarlKarlQarl/Legally-Distinct-Tetris
- Back-end Repo: https://github.com/CarlKarlQarl/Legally-Distinct-Tetris-Backend
- Local repos (because I'm going to forget):
    - /Users/flatironschool/Flatirons/5Mod/capstone/tetris
    - /Users/flatironschool/Flatirons/5Mod/capstone/tetris-backend

# Game Controls
- Left and Right Arrow Keys: Move the piece left and right
- Up Arrow Key: Rotate the piece clockwise
- Down Arrow Key: Quickly drop the piece

# How to Use and Play
Starting from the top...
## Start and Restart Buttons
The "Start" button will start the game, at which point, you should switch to using the arrow keys. The "Restart" button is used to clear the board and the current score, and prepare everything for a new game.

For your first game, you should start by signing-up and logging-in (detailed below), and then hit "Start". For every subsequent game, you should hit "Restart" and then "Start" to begin again.

## Level, Score, and Lines
These will each measure progress of the current game
- Level: Determined by the number of lines cleared (ten lines per level) and determines the speed of the game
- Score: Running total of points awarded from clearing lines and can submitted the the leaderboard at the end of the game
- Lines: Running total of the number of lines cleared

## Current Player and Score Submission
Once a player is logged in, their username will be displayed below the score keeping section. Along with the username will be two buttons: "Log-out", which will log the current player out, and "Submit Score", which will submit the current score to the leaderboard under the current player's name.

## Sign-up and Log-in Forms
By pressing the "Sign-up" or "Log-in" button, the corresponding form will be displayed. The sign-up form will create a new account for the player, and the log-in form will authenticate the player's credentials, and allow them to start submitting scores to the leaderboard.

## Highscores
The top ten highest scores are retrieved from the back-end and displayed here.

# Known Issues and Future Changes
- Rotation collision is not presently functioning. Or that is, when a piece is rotated, it does not care whether it is going to rotate into another piece or out of bounds. Fortunately, through my own observations and play testing, most players never encounter this issue. Typically, players will rotate a piece to the correct orientation, and then try to line up where they intend to drop it. This means, more often than not, pieces are not rotating near other pieces or the boundaries. Implementing this feature half-baked greatly hinders gameplay, so, I'm leaving it out for the time being, and am quite confident few people will notice.
- A second note on rotation collision: when rotation collision occurs, the rotation should still attempt to happen. Based off the terminology in the Tetris wiki, this would be called a "wall kick": after the collision happens, the piece should rotate and try moving either to the left or right, in an attempt to find space it can freely rotate into. So, I'm trying to clarify that I want to bring rotation collision into the game, but I need a bit of time to refactor how lateral collisions occur so I can use them during rotation collision, and implement the wall kick. By only implementing the rotation collision, and halting the player from making that move, the game feels unresponsive and frustrates the player. I am instead opting for the player to make an illegal move that doesn't stop the player from playing.
- The organization or flow of the side panel needs some work. Elements are organized in by importance (starting the game, list who is playing, signing up, highscores), but they should probably sign-up, log-in, start the game, submit a score, see the score on the board (if high enough), restart the game, and then log-out when done. So, these elements are almost the exact opposite places. I'm fine with the lay-out for now, but there is certainly a better lay-out for these elements.
- New highscores do not optimistically render. Not a hard change, but the leaderboard is in a weird place, and will need to be passed some more props for this.
- How much faster the pieces drop per level needs to be more consistent. At present, the drop movement is called every 500 milliseconds minus the level times 50. This means at level 10, the piece should be shooting to the bottom of the board as soon as it is created. The problem is that the change in the delay is linear, but the speed change is exponential. I like my simple formula, but I need to create one that doesn't give the game a very clear ending. The game should end because the play screwed up, not because they weren't as fast as the computer. I mean, they should eventual lose because they were not fast enough, but I'm asking for too much too soon.