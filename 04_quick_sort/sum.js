/*
    sum arr = if arr == []
    then 0
    else (head arr) + (sum (tail arr))
*/

let sum = (array) => {
    if (array.length > 1) {
        return array[0] + sum(array.slice(1)) 
    } else return array[0]
}

let result = sum([ 1, 2, 3, 4, 5]);
console.log(result);
