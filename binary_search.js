// Búsqueda Binaria Log base 2 de (n)
function binary_search(list, item){

    let low = 0;                        // low y high llevan cuenta de en qué parte de la lista estarás buscando
    let high = list.length - 1;

    while (low <= high) {               // Mientras no lo hayas delimitado a un elemento
        let mid = (low + high);         // Se redondea hacia abajo automáticamente de no ser un número par
        let guess = list[mid];

        if (guess == item) {            // Se halló el item
            return mid  
        } 

        else if (guess > item) {        // La suposición ("guess") fue muy alta
            high = mid - 1; 
        }

        else                            // La suposición ("guess") fue muy baja
            low = mid + 1 
    }

    return null;                        // Devolvemos valor nulo si no se halla el item
}

// my_number_list  = [1, 3, 5, 7, 9];
// my_name_list    = ["Alberto", "Carlos", "Gerardo", "Mauricio", "Xavier"];
// let result      = binary_search(my_list, 5);
// console.log(result);