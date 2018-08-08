function countdown(i) {
    console.log(i);

    // Caso base
    if (i <= 0) {
        return;
    } else {
        countdown(i-1);
    }
}

countdown(5);