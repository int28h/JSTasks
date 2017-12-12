/*
 * Complete the function in the editor. It has one parameter: an array, nums. 
 * It must iterate through the array performing one of the following actions on each element:
 * If the element is even, multiply the element by 2.
 * If the element is odd, multiply the element by 3.
 * The function must then return the modified array.
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

function modifyArray(nums) {
    for(var i in nums){
        if(nums[i] % 2 == 0){
            nums[i] *= 2;
        } else {
            nums[i] *= 3;
        }
    }
    return nums;
}

function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);
    
    console.log(modifyArray(a).toString().split(',').join(' '));
}