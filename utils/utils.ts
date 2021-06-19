export function swap(first: number, second: number, arr: number[]): void {
  const third = arr[first];
  arr[first] = arr[second];
  arr[second] = third;
}
