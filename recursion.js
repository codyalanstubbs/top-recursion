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

function mergeSortedArrays(ArrOne, ArrTwo) {
    let mergedAndSorted = [];

    while (ArrOne.length > 0 && ArrTwo.length) {
        if (ArrOne[0] < ArrTwo[0]) {
            mergedAndSorted.push(ArrOne.shift());
        } else {
            mergedAndSorted.push(ArrTwo.shift());
        }
    }

    return mergedAndSorted.concat(ArrOne).concat(ArrTwo);
}
// let ArrOne = [2,8,15,18];
// let ArrTwo = [5,9,12,17];
// console.log("C: ", mergeSortedArrays(ArrOne, ArrTwo));

function mergeSort(array) {
    let endIndex = array.length;
    let midpoint = endIndex/2;
    let leftArray = array.slice(0, midpoint);
    let rightArray = array.slice(midpoint, endIndex);

    if (endIndex < 2) {
        return array;
    } else { 
        return mergeSortedArrays(mergeSort(leftArray), mergeSort(rightArray));
    } 

}
// let a = [4,8,6,2,1,7,5,3];
// let b = [4,3,2,1];
// let c = [3,2,1,4];
// let d = [2,1,3,4];
// console.log("mergeSort(a): ", mergeSort(a));
// console.log("mergeSort(b): ", mergeSort(b));
// console.log("mergeSort(c): ", mergeSort(c));
// console.log("mergeSort(d): ", mergeSort(d));