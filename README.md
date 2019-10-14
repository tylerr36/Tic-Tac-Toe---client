# Tic - Tac - Toe

This game allows two people two play Tic-Tac-Toe under a single person's username on a single machine. The number of games played per user is tracked (...not yet, with my game) through an API, so that user's individual statistics can be displayed as their request. Unfortunately, at this point, the screen must be refreshed to restart the game.

## Important Links

- [Deployed Tic Tac Toe Client](https://tylerr36.github.io/Tic-Tac-Toe---client/)

# Technologies Used

- HTML
- CSS
- JavaScript
- AJAX

# Development & Problem Solving Process

- User stories helped put the game in the perspective of someone who doesn't care about the code. I mean that in the sense of a user should never have to think about what is going on with a game's backend. To a user, the game should simply work, and clicks should be intuitive. I found that it helped to click through and imagine where I would naturally want to click as a user. I wasn't always able to make these click locations possible, but it was a good reminder to always keep a user's perspective in mind.

- I thought it would be a moral boost to see a gameboard on the screen, so I tackled that first. Setting up the sign up/sign in fields was similar enough to class that I felt comfortable proceding to that step next.

- I found problem-solving to be more difficult than anticipated, because of the many small differences within classmates' code, and the code of people online. Understanding how someone's function name aligned with one of mine was a challenge, as well as figuring out where else their code differed from mine, so as to not blindly follow issue queue advice which would potentially only work properly for their specific code.

- A friend (and NYC GA 2015 WDI alum working at Rockstar Games) helped me better understand jQuery, which immediately solved many of my problems pertaining to text appearing on screen.

[Wireframe](https://i.imgur.com/WJev1dH.jpg)
[User Stories](https://i.imgur.com/elCUhXg.png)


# Unsolved Problems

- I thoroughly enjoyed working out the logic behind how code should be organized (ex. What's the most efficient way to alternate clicks between X and O? What's the most efficient way to find a winner?), but greatly struggled with how to then create code with the propoer syntax in the correct/logical file. While issues may have arisen, I found myself wanting to put all JS in a single file.

- At the end of a game, the "Start New Game" button clears the board, but not the gameboard array.

- Games are not yet tied to a user.

- The created game message does not disappear.

- I would eventually like to add CSS and perhaps even sounds, so that the game is fun for users, rather than simply functional.
