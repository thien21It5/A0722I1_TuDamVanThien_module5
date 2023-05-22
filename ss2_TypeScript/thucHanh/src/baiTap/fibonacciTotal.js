var arr = [0, 1, 2];
var number;
function countFibonacci(num) {
    if (num <= 3) {
        return arr;
    }
    else {
        for (var i = 3; i < num; i++) {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
        return arr;
    }
}
number = 6;
countFibonacci(number).forEach(function (value) { return console.log(value); });
var sum = 0;
for (var i = 0; i < number; i++) {
    sum += countFibonacci(number)[i];
}
console.log(sum);
