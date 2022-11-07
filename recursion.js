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
// console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

function fibsRec(number) {
    let fibSeqence;
    let prevNumber;
    let nextNumber;
    let currentNumber; 

    if (number === 0) {
        return [0];
    } else if (number === 1) {
        return [0,1];
    } else if (number >= 2) {
        fibSeqence = fibsRec(number - 1);
        prevNumber = fibSeqence.length - 2;
        nextNumber = fibSeqence.length - 1;
        currentNumber = prevNumber + nextNumber; 
        fibSeqence.push(currentNumber);
    }

    return fibSeqence;
}
// console.log(fibsRec(22)); // [0, 1, 1, 2, 3, 5, 8, 13]