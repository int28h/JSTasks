/*
 * Complete the getSecondLargest function in the editor below. It has one parameter: an array, nums, 
 * of n numbers. The function must find and return the second largest number in nums.
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

function getSecondLargest(nums) {
    var max1 = Math.max.apply(null, nums);
    var max2 = 0;
    for(var i in nums){
        if(nums[i] == max1){
            continue;
        }
        if(max2 < nums[i]){
            max2 = nums[i];
        }        
    }
    return max2;
}

function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}