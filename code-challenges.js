// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

//Declare variable that takes in array
// const removeFirst = (array) => {
//     //iterate through array using a for loop
//     for (let i = array.length - 1; i > 0 ; i--) {
//         //establish randomizing of array 
//         var j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]]
//     }
//     //once randomized remove the first item in the in the array
//     array.shift()
//     return array
// }
//each time it is called it will remove an item until it just returns an empty array.
// console.log(removeFirst(collections))
// console.log(removeFirst(collections))
// console.log(removeFirst(collections))
// console.log(removeFirst(collections))
// console.log(removeFirst(collections))


// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// Declare variable that takes in array
const arrayCubed = (arr) => {
    //Add up all the integers in array and return the cubed value
    return arr.reduce(function(a, b){
        return a + b ** 3
    }, 0)
}
    
// console.log(arrayCubed(cubeAndSum1))
// console.log(arrayCubed(cubeAndSum2))

// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

//declare function that takes in array
const smallThenLarge = (arr) => {
    //establish new empty array to push min and max values into
    let minLarge = []
        //push minimum value first
        minLarge.push(Math.min(...arr))
        //push max value second
        minLarge.push(Math.max(...arr))
        //return the new array
        return minLarge
}
//test out with provided variables
// console.log(smallThenLarge(nums1))
// console.log(smallThenLarge(nums2))






// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

const everyOtherCap = (str) => {
    let newString = ""
    for (i = 0; i < str.length; i++) {
        newString += i % 2 == 1 ? str.charAt(i).toUpperCase() : str.charAt(i)
    }
    return newString
}

// console.log(everyOtherCap(testString1))
// console.log(everyOtherCap(testString2))



// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

//declare a function that will take in two arrays
const merge = (array1, array2) => {
    //establish an new array for two arrays combined
    //concat two arrays together
    let arrayMerged = array1.concat(array2)
    //filter through and remove any duplicate values
    return arrayMerged.filter((item, index) => {
        //return new array without duplicates
        return (arrayMerged.indexOf(item) == index)
    })
}

//console.log to test
console.log(merge(arr1, arr2))