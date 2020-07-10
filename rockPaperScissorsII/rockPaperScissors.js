/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Example:
*   [
*     [ // one possible three round game outcome
*       'rock',    // round 1
*       'paper',   // round 2
*       'scissors' // round 3
*     ],
*     [ // next possible three round game outcome
*       'rock',    // round 1
*       'paper',   // round 2
*       'rock'     // round 3
*     ],
*   etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/
function rockPaperScissors (rounds){
    var outcomes = [];
    var options = ["rock", "paper", "scissors"];

    function myFunction(game, roundsLeft){
        if (roundsLeft === 0){
            outcomes.push([...game]);
            return;
        }

        for (var i = 0; i < options.length; i++){
            game.push(options[i]);
            myFunction([...game], roundsLeft - 1);
            game.pop();
        }
    }

    myFunction([], rounds);

    return outcomes;
} 

rockPaperScissors();