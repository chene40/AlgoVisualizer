export default function InsertionSort(arr: number[]): void {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    const value = arr[i];
    while (j >= 0 && value < arr[j]) {
      arr[j + 1] = arr[j];
      arr[j--] = value;
    }
  }
}
