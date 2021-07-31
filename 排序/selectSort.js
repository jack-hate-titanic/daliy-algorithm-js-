const swap = function (first, second, arr) {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

const selectSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  for (let j = 0; j < arr.length; j++) {
    let min = j;
    for (let i = j; i < arr.length; i++) {
      if (arr[i] < arr[min]) {
        min = i;
      }
    }
    swap(min, j, arr);
  }
  return arr;
};

const arr = [5, 9, 20, 15, 43];
console.log(selectSort(arr));
