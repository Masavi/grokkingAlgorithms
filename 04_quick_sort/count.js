/*
    Write a recursive function to count 
    the number of items in a list
*/

/* let count = (array) => {
    if (array.length > 1) {
        return 1 + count(array.slice(1));
    } else {
        return 1;
    }
} */
 
let count = (list) => {
    if (list.length === 0) {
        return 0;
    } else {
        return 1 + count(list.slice(1));
    }
}

let result = count([ 1, 2, 3, 4, 5, 6]);
console.log(result); // -> 6