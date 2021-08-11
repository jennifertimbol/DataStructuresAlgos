// How do we search?
//1. Linear Search - Look at every single element from beginning going forward

// Linear Search Pseudocode
// -This function accepts an array and a value
// -Loop through an entire array and check if value is in the array
// -If it is return the index of the value
// If value is not found, return -1

function linearSearch(arr, val){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === val){
            return i;
        }
        return -1;
    }
    console.log('Hello World!')
}

linearSearch([1,2,3,4], 4);


// 2. Binary Search - Divide and Conquer / Checking in the middle and eliminating the other half (Only works on sorted elements)

// Binary Search Pseudo
// -Write a function that accepts a sorted array and a value
// Created 2 variables, left and right pointers starts and end of an array
// Create a forloop
// While you havent found the element keep looping
// If value is too small, move left pointer up
// If value is too lard, move pointer down

function binarySearch(arr, val){
    var left = 0;
    var right = arr.length - 1;
    var middle = Math.floor((left + right)/2);
    while(arr[middle] !== val) {
        if(val < arr[middle]) {
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
        middle = Math.floor((left + right) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Binary Search BIG O
// Best case O(1)
// Worst case O(log n)

// Naive String Search
// Suppose you wanna find a short string in a long string
// Pseudo: Define a function, Loop over longer string, loop over the longer string
// If characters dont match break out of the inner loop
// if characters do match keep going
// If you complete inner loop and find a match, increment the count of matches
// Return the count

// Naive String Search Implementation

function naiveSearch(long, short) {
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
            if(short[j] !== long[i+j]){
                break;
            }
            if(j=== short.length - 1) {
                count++;
            }
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")

i: "l"
j: "l"

