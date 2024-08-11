//array
// JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).  

// const myArry = [0,1,2,3,4,5]
// console.log(myArry.length) //6
// console.log(myArry[3]) //0
// console.log(myArry[myArry.length-1]) //5
// console.log(myArry[6]) //undefined

// const myHeeros = ['ram','krishna']
// console.log(myHeeros.length) //2
// console.log(myHeeros[0]) //ram
// console.log(myHeeros[1]) //krishna
// console.log(myHeeros[2]) //undefined

//  aary ke indexing se use kara jata he
// aary shello copy banata he
myArry.push(3)
console.log(myArry)


