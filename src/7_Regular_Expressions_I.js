/*
 * Complete the function in the editor below by returning a RegExp object, re, that matches any string s 
 * that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.
 * Constraints
 * The length of string s is >= 3.
 * String s consists of lowercase letters only (i.e., [a-z]).
 */
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function regexVar() {
    const re = new RegExp('^([aeiou]).*\\1$');
    return re;
}

function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(re.test(s));
}