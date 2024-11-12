//odd
(function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})([1, 2, 3, 4, 5]);

//title caps
var  tC = (function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
})(["hello", "hi"]);
console.log(tC.join(""));

//rotate
var rA = function(arr, k) {
    k = k % arr.length;
    return arr.slice(k).concat(arr.slice(0, k));
};
console.log(rA([1, 2, 3, 4, 5], 2));

//sum
let sum = function(arr) {
    return arr.reduce(function(acc, num) {
        return acc + num;
    }, 0);
};
console.log(sum([1, 2, 3, 4, 5]));

//prime
let Primes = function(arr) {
    return arr.filter(function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
};
console.log(Primes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));