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
function rockPaperScissors (){
    var outcomes = [];
    var options = ["rock","paper","scissors"];
    for (var i=0; i<options.length; i++){
        for (var j = 0; j<options.length; j++){
            for (var m =0; m<options.length; m++){
                outcomes.push ([options[i], options [j], options [m]]);
            }
        }
    } 
    return outcomes;
}

/*function rockPaperScissors (){
    var outcomes = [];
    //declared variable options to be an array of options rock, paper, scissors
    var options = ["rock","paper","scissors"];
    //for loop that will increment one by one for each outcome
    for (var i=0; i<options.length; i++){
        outcomes.push(options [i]);
    }
    //option plus and equal to the outcome
return outcomes;
{
*/