const quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pointIndex = Math.floor(arr.length / 2);
  let point = arr.splice(pointIndex, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < point) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([point], quickSort(right));
};

const arr = [15, 12, 3, 2, 7];
console.log(quickSort(arr));
