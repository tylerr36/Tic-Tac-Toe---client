# Tic - Tac - Toe



A single player game that allows the user to create an account and play tic tac toe
against a second player on the same machine. Game statitistics and accounts
are tracked through an API that allows the game engine to display results unique
to each account.

# Technologies Used

- HTML
- CSS
- JavaScript
- AJAX

# Development & Problem Solving Process

- User stories helped put the game in the perspective of someone who doesn't care about the code. I mean that in the sense of a user should never have to think about what is going on with a game's backend. To a user, the game should simply work, and clicks should be intuitive. I found that it helped to click through and imagine where I would naturally want to click as a user. I wasn't always able to make these click locations possible, but it was a good reminder to always keep a user's perspective in mind.

- I thought it would be a moral boost to see a gameboard on the screen, so I tackled that first. Setting up the sign up/sign in fields was similar enough to class that I felt comfortable proceding to that step next.

- I found problem-solving to be more difficult than anticipated, because of the many small differences within classmates' code, and the code of people online. Understanding how someone's function name aligned with one of mine was a challenge, as well as figuring out where else their code differed from mine, so as to not blindly follow issue queue advice which would potentially only work properly for their specific code.

-A friend (and NYC GA 2015 WDI alum working at Rockstar Games) helped me better understand jQuery, which immediately solved many of my problems pertaining to text appearing on screen. 

[Wireframe](wireframe.png)
[User Story](userstory.png)

# Version Documentation

Numbers before the . represents each game engine, CSS, and HTML update.
Numbers after the . represents each API update. If 0, no update added.

# Unsolved Problems

-I thoroughly enjoyed working out the logic behind how code should be organized (ex. What's the most efficient way to alternate clicks between X and O? What's the most efficient way to find a winner?), but greatly struggled with how to then create code with the propoer syntax in the correct/logical file. While issues may have arisen, I found myself wanting to put all JS in a single file.

-At the end of a game, the "Start New Game" button clears the board, but not the gameboard array.

-Games are not tied to a user (I found teh )

- Would like to display game results for each player.
- Organize more actions from events.js into ui.js.
- I need to work on my deployment after each commit.
