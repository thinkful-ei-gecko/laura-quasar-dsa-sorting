"use strict";
// 1. Given the following list of numbers
// 21, 1, 26, 45, 29, 28, 2, 9, 16, 49,
// 39, 27, 43, 34, 49, 40
// What is the resulting list that will be sorted
// after 3 recursive calls to mergesort?
// 21, 1, 26, 45
// after 16 calls?
// 1
// first two lists to be merged:
// 21 and 1
// lists that are merged on the 7th merge:
//
// 2. 3 9 1 14 17 24 22 20
// the pivot could hae been 17 or 14
//
// [3, 9, 10] 12 [14, 13, 15, 16, 19, 17]
//
//
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}
// 3. Implementing quicksort
function qSort(array, start = 0, end = array.length) {
  if (start >= end) return array;

  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

// needs to be O(n)
// 24 is max, 1 is the min (example)
function bucketSort(array, min, max) {
  
}

function main() {
  // prettier-ignore
  const dataset = [89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,
    26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,
    38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,
    31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,
    42,51,54,84,34,53,78,40,14,5,
  ];

  const bucketNumbersUnsorted = [ 2, 24, 1, 9, 16, 6, 8, 12];

  console.log(qSort(dataset));
}

main();
