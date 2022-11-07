function fibs(number) {
    let sequence = [0, 1];
    let prevNumber;
    let nextNumber;
    let currentNumber; 

    for (let i = 2; i < number; i++) {
        prevNumber = sequence[i-2];
        nextNumber = sequence[i-1];
        currentNumber = prevNumber + nextNumber;
        sequence.push(currentNumber);
    }
    return sequence;
}
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]