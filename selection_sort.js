/*
    Ordenamiento por Selección 
             O(n^2)
*/

// Usamos esta función dentro de selectionSort() más adelante
let findSmallestIndex = (array) => {
    let smallestValue = array[0];    // Guarda el valor más pequeño
    let smallestIndex = 0;     // Guarda el índice del valor más pequeño

    for (let i=1; i<array.length; i++){
        if ( array[i] < smallestValue ){
            smallestValue = array[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

let selectionSort = (array) => {    // Ordena un arreglo
    let sortedArray = [];  
    let length = array.length;
    
    for (let i=0; i < length; i++){
        let smallestIndex = findSmallestIndex(array);       // Halla el elemento más pequeño del arreglo,
        sortedArray.push(array.splice(smallestIndex, 1)[0]);   // lo saca de éste y lo agrega al nuevo arreglo
        //sortedArray.push(array.pop(smallestIndex));   
    }
    
    return sortedArray;
}

console.log(selectionSort([5, 3, 6, 2, 10]));