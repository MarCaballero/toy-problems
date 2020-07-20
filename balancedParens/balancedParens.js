/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
function balancedParens (string){ //Function that takes a string
var isClosed = false;
var myArr= [];
for (var i = 0; i<string.length; i++){
    if (string[i]==="(" || string[i]==="{" || string[i]==="["){
        myArr.push (string[i]);
    }
    if (string[i]===")" || string[i]==="}" || string[i]==="]"){
        myArr.pop (string[i]);
    }
}
if (myArr.length === 0){
    isClosed = true
} 
return isClosed
}
