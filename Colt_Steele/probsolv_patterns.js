// // Problem Solving patterns

// //----- Some patterns-----
// // 1. Frequency Counters
// // Uses an object to collect values in their frequencies

// // ex. Write a function called same, which accepts two arrays. 
// // The function should return true if every value in the array has its corresponding value squared in the second array. 
// // The frequency of values must be the same.
// // same([1,2,3], [4,1,9]) //true

// // Naive solution O(n2)
// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1) {
//             return false;
//         }
//         console.log(arr2);
//         arr2.splice(correctIndex,1)
//     }
//     return true;
// }

// same([1,2,3,2], [9,1,4,4])

// // Try not to use nested loops whenever possible

// // Refactored O(n)
// // Two loops is better than two nested loops
// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}
//     for(let val of arr1){
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1 
//     }
//     for(let val of arr2){
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
//     }
//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);
//     for(let key in frequencyCounter1){
//         if(!(key ** 2 in frequencyCounter2)){
//             return false
//         }
//         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
//             return false
//         }
//     }
//     return true
// }

// same([1,2,3,2,5], [9,1,4,4,11])

// // Anagrams
// // Given two strings, write a function to determine if the second string is an anagram of the first. An anagam is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// // lol
// // function validAnagram(arr1, arr2) {
// //     if(arr1.length !== arr2.length){
// //         return false;
// //     }
// //     let requencyCounter1= {}
// //     let
// //     for(let i=0; i<arr1.length; i++){

// //     }
// // }

// function validAnagram(first,second){
//     if(first.length !== second.length) {
//         return false;
//     }
//     const lookup = {}; 

//     for(let i=0; i < first.length; i++){
//         let letter = first[i];
//         // if letter exists, increment, otherwise set to 1
//         let[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//     }
//     for(let i=0; i < second.length; i++) {
//         let letter = second[i];
//         //cant find letter or letter is zero then its not an anagram
//         if(!lookup[letter]) {
//             return false;
//         }
//         else {
//             look[letter] -= 1;
//         }
//     }
//     return true;
// }

// // 2. Multiple Pointers
// // Create pointers or values that correspond to an index or position and move towards the beginning, end, o middle based on a certain condiion.
// // Very efficient for solving problems with minimal space complexity.

// //ex. Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exists.

// // Naive solution. Too many nested loops. Time complexity O(n^2) Space complexity O(1)
// function sumZero(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }


// sumZero([-4,-3,-2,-1,0,1,2,5])

// // Refactored. Time complexity- O(n) Space complexity- O(1)
// function sumZero(arr){
//     let left = 0;
//     let right = arr.length - 1;
//     while(left < right) {
//         let sum = arr[left] + arr[right];
//         if(sum===0){
//             return [arr[left], arr[right]];
//         }
//         else if(sum>0){
//             right--;
//         }
//         else {
//             left++;
//         }
//     }
// }

// // ex. Implement a function called cuntUniqueValues which accepts a sorted array, and counts the unique values in the array. There can be negatve numbers in the array, but it will always be sorted.

// // My answer
// function countUniqueValues(arr){
//     var newArr= [];
//     for(let i=0; i<arr.length;i++){
//         var x = arr[i];
//     }
//     for(let i=0; i<arr.length+1;i++){
//         var y = arr[i];
//         if(x !== y){
//             newArr = newArr[i+1]
//         }
//     }
// }

// Colt's solution
function countUniqueValues(arr) {
    if (arr.length == 0) return 0;
    var i = 0;
    for (var j = 1; j < arr.length; j++) {
        // j is looping from index 1 to the end of the array
        if (arr[i] !== arr[j]) {
            // compare them if they're not equal we wanna move i up by 1
            i++;
            // Increment i and set arr[i] to arr[j] then compare again
            arr[i] == arr[j]
        }
        // console.log(i,j);
    }
    return i + 1;
}

countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 5, 6, 7])

// 3. Sliding Window
// Useful when we have a set of data and we're looking for a subset of the data that is continious
// Write a function called maxSubarraySum which accepts an array of integets and a number called n. The function should calculate the max sum of n consecutive elements in the array.

// Naive solution
function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)


// Refactored
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)

// 4. Divide and Conquer
// Pattern involves dividing a data set into smaller chunks then repeating process with a subset of data
// Pattern can decrease time complexity
