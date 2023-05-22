let arr: number[] = [0, 1, 2];
let number: number;

function countFibonacci(num) {
  if (num <= 3) {
    return arr;
  } else {
    for (let i = 3; i < num; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
  }
}

number = 6;
countFibonacci(number).forEach(value => console.log(value));

let sum: number = 0;

for (let i = 0; i < number; i++) {
  sum += countFibonacci(number)[i];
}
console.log(sum);
