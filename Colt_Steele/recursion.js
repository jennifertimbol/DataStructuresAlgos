// // Recursion- A different way of thinking about writing a solution
// // Taking one problem and doing it by pieces

// // What and why use recursion?
// // A process (a function) that calls itself.
// // It's everywhere and its used all the time. 
// // (i.e json.parse/json.stringify, document.getElementById and DOM traversal algos, object traversal, more complex data structures, cleaner alternative to iteration)

// // What happens behind the scene when functions are called over and over?
// // Data structure called 'The call stack'
// // When a function is invoked its placed on top of the call stack
// // When js sees the return word the compiler will remove(pop)

// // Call Stack example:
// // function takeShower(){
// //     return "Showering!"
// // }

// // function eatBreakfast(){
// //     let meal = cookFood()
// //     return `Eating ${meal}`
// // }

// // function cookFood(){
// //     let items = ["Oatmeal", "Eggs", "Protein Shake"]
// //     return items[Math.floor(Math.random()*items.length)];
// // }
// // function wakeUp() {
// //     takeShower()
// //     eatBreakfast()
// //     console.log("Ok ready to go to work!")
// // }

// // wakeUp()

// // Game plan-- 2 things that needs to be present:
// // 1. Different Input, recursive call, you wanna call it with a different data
// // 2. A base case or a stopping point.

// function countDown(num) {
//     if(num<=0) { 
//         // is the number equal or less than 0? (Our base case)
//         console.log('All done!');
//         return;
//         // it skips this whole code
//         // return statement stops the whole code
//     }
//     console.log(num);
//     // prints num
//     num--;
//     // subtracts from num
//     countDown(num);
//     // starts over again
// }

// // Non-recursive way
// function countDown(num){
//     for(var i=0; i>0; i--){
//         console.log(i);
//     }
//     console.log('All done!')
// }

// // ex.
// // Can you spot the base case? return 1
// // Do you notice the different input? 
// // What would happen if we didn't return?
// function sumRange(num){
//     if(num === 1) return 1; 
//     return num + sumRange(num-1);
// }
// //  sumRange(3)
// //         return 3 + sumRange(2)
// //                     return 2 + sumRange(1)
// //                                     return 1

// // Writing Factorial Iteratively
// 4! = 4*3*2*1
// // ex
// function factorial(num) {
//     let total = 1;
//     for(i=num; i> 0; i--){
//         total *=i
//     }
//     return total;
// }

// // recursive way
// function factorial(num){
//     if(num===1) return 1;
//     return num * factorial(num-1);
// }

// // -Common problems when writing recursive solutions
// // Not having a base case or if your basecase if wrong
// // Returning the wrong thing/forgetting to return
// // Stackoverflow!

// // -Helper Method Recursion
// // is a pattern where you have an outer function thats not recursive with an inner function thats recursive
// function collectOddValues(arr){
    
//     let result = [];

//     function helper(helperInput){
//         if(helperInput.length === 0) {
//             return;
//         }
        
//         if(helperInput[0] % 2 !== 0){
//             result.push(helperInput[0])
//         }
        
//         helper(helperInput.slice(1))
//     }
//     helper(arr)
//     return result;
// }

// collectOddValues([1,2,3,4,5,6,7,8,9])

// Pure Recursion

function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])