// Similar to Bubble Sort but instead of placing large values into sorted position at the end of array, we place small values into sorted position

[5,3,4,1,2]
// We look for the minimum value and we put it to the front
// Check all the values and find the minimum and swap it in the front

// Pseudocode
// Store first element as the smallest value you've seen so far
// Compare it to the the next item, if that item is smaller, we updated value of min variable
// Save the index of where the value is found
// If min is not the value(index) you began with, swap the two values
// Repeat this with the next element until the array is sorted

// my code

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        var min = arr[i];
        // store minimum in a var
        if(arr[i] < arr[i+1]) {
            min = arr[i];
        }
    }
    return arr;
}

// colt's code

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        var lowest = i;
        // store the position not the value
        for(var j = i+1; j < arr.length; i++) {
            // comparing
            if(arr[j] < arr[lowest]) {
                lowest = j;
                // finding the lowest item
            }
        }
        var temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
        // swap
    }
    return arr;
}

// this is still swapping the lowest to itself 
// code is swapping no matter what

selectionSort([34,22,10,19,17]);

// adding a conditional

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        var lowest = i;
        // store the position not the value
        for(var j = i+1; j < arr.length; i++) {
            // comparing
            if(arr[j] < arr[lowest]) {
                lowest = j;
                // finding the lowest item
            }
        }
        if(i !== lowest) {
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        // swap
        }
    }
    return arr;
}
selectionSort([0,2,34,22,10,19,17]);

// Big O complexity is O(n2)