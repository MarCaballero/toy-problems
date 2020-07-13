/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurance items and return the first one.
 * Return null if there are no even-occurance items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

function onlyEven (arrayOfNumbers){
    var newArr = [];
    for (var i = 0; i < arrayOfNumbers.length; i++){
        if(arrayOfNumbers[i] % 2 === 0){
           newArr.push(arrayOfNumbers[i]);
        }
    } 
    if (newArr.length === 0){
        newArr = null;
    }
    return newArr;
}



