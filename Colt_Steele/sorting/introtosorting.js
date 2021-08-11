// What is sorting?
// Process if rearranging the items in a collection so that items are in some kind of order
// i.e. Sorting nums from smallest to largest, alphabetically, movies based on release year etc

// Visualgo for visuals

// ex.
function sort(arr) {
    return arr
}

// Figuring out a way to sort
sort([23,45,6,12,13])
[6,12,13,23,45]

// Why do we need to learn sorting?
// Common task, good to know how it works
// There are many ways of sorting, each algo will have pros and cons
// Insertion, Selection, Bubble, Shell, Merge, Heap, Quick, Quick3
// Go to Sorting Algorithms Animations

// Built in array sort method .sort()
// Default sort order is according to string Unicode code points.
// ex.
['March', 'Feb', 'Jan', 'Dec'].sort();
['Dec', 'Feb', 'Jan', 'March']

[6,4,15,10].sort();
[10,15,4,6]

// Tell JS how to sort
// Built-in sort method accepts an optional comparator function
// Use comparator function to tell JS how you want it to sort

// ex
function numberCompare(num1, num2) {
    return num1 - num2;
    return num2 - num1; //would return descending 
}

[6,4,15,10].sort(numberCompare);

// o/p: [4, 6, 10, 15]