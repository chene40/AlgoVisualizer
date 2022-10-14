function merge(left: number[], right: number[]): number[] {
  const arr: number[] = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) arr.push(left[i++]);
    else arr.push(right[j++]);
  }

  /* if one of the array is non-empty, then all the remaining number in that array
  has to be greater than the other array's maximum value. In that case, add all the 
  remaining numbers in the non-empty sorted array to arr */
  while (i < left.length) arr.push(left[i++]);
  while (j < right.length) arr.push(right[j++]);
  return arr;
}

export default function MergeSort(arr: number[]): number[] {
  if (arr.length < 2) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle); //
  const right = arr.slice(middle);

  return merge(MergeSort(left), MergeSort(right));
}
