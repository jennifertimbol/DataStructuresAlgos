// Not efficient and not commonly used
// Sorting Algo where the largest values bubble up to the top

[5,3,4,1,2]
// It iterates a couple times until your numbers are sorted

// Before we sort, we must swap!

function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// BubbleSort Pseudo
// define a function
// start looping with a var called i the end of the array towards the beginning
// start an innerloop with a var called j from the beginning until i -1
// if arr[j] is greater than arr[j+1] swap those two valyes
// return sorted array

// my answer
function bubbleSort(arr) {
    for(let i = arr.length-1; i--) {
        for(let j = ) {
            if(arr[j] > arr[j+1]) {
                return sortedArr;
            }
        }
    }
}

// colts "naive solution"
// typo supposed to be from the beginning to the end
function bubbleSort(arr) {
    for(let i = 0; i<arr.length; i++) {
        // this only loops once and we'll have the largest number at the end, we need to repeat that process
        for(var j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]) {
                // swapping
                var temp = arr[j];
                // saving old version into a temp variable
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// working version of bubble sort, not optimize because it runs over and over

// a better solution following the pseudo code,looping from end of an array to the beginning
function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--) {
        // i starts at 4, inner loop is gonna compare j less than 4-1
        for(var j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                // swapping
                var temp = arr[j];
                // saving old version into a temp variable
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

bubbleSort([37,45,29,8]);

// Optimization
// If our data is almost sorted or if its already sorted, bubble sort algo doesn't treat it differently, it'll still try to sort every single item
// Check if you made a swap or not, if you don't that means you're done
// Optimized with noSwaps

function bubbleSort(arr) {
    var noSwaps;
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(var j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);

// Big O Complexity
// In general it's O(n2) because we have a nested loop
// If its nearly sorted or already sorted with noSwaps, its linear time O(n)