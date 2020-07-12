/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing only the unique characters found in both strings, in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */
/**
 * 
 * @param {string} stringOne 
 * @param {string} stringTwo
 * 
 * output: it's a string with unique characters found in both strings which has to be in order based 
 */
function findCharacters (stringOne, stringTwo){
    var result = "";
    var characterCountOne = {};
    //For Loop over stringOne to find unique characters
    var uniqueOne = getUniqueChars(stringOne);
    var uniqueTwo = getUniqueChars(stringTwo);
    var commonChars = {};
    for (var i = 0; i < uniqueOne.length; i++){
        if (commonChars[uniqueOne [i]] === undefined){
            commonChars[uniqueOne[i]] = 1;
        } else {
            commonChars[uniqueOne[i]]++
        }
    }
    for (var i = 0; i < uniqueTwo.length; i++){
        if (commonChars[uniqueTwo [i]] === undefined){
            commonChars[uniqueTwo[i]] = 1;
        } else {
            commonChars[uniqueTwo[i]]++
        }
    }
    for (var i = 0; i < uniqueOne.length; i++){
        if (commonChars[uniqueOne[i]] === 2){
            result = result + uniqueOne[i];
        }
    }
    //Find unique characters in stringOne
    //Find unique characters in stringTwo
    
    return result;

    function getUniqueChars(str) {
        var characterCount = {};
        for (var i = 0; i < str.length; i++) {
            if (characterCount[str[i]] === undefined) {
                characterCount[str[i]] = 1;
            }
            else {
                characterCount[str[i]]++;
            }
        }

        var uniqueChars = "";

        for (var i = 0; i < str.length; i++) {
            if (characterCount[str[i]] === 1) {
                uniqueChars += str[i];
            }
        }

        return uniqueChars;
    }
}