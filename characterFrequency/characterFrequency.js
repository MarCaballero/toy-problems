/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Gotcha ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *
 */


function characterFrequency (str){
    var myArr= [];
    var character = {};
    for (var i = 0; i < str.length; i++){
        if (character[str[i]] === undefined){
            character[str[i]] = 1;
        }else{
            character[str[i]]++;
        } 
    }
    for (var property in character){
        myArr.push(`[${property}: ${character[property]}]`);
    }

    return myArr;
}
