//odd
var Odd = (arr) => arr.filter(num => num % 2 !== 0).forEach(oddNum => console.log(oddNum));
var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Odd(n);

//title caps

var t= (arr) => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

var s = ["hello", "world", "javascript"];
var tC = t(s);
console.log(tC);

//sum 
var sumn = (arr) => arr.reduce((acc, num) => acc + num, 0);var numbers = [1, 2, 3, 4, 5];var sum = sumn(numbers);
console.log(sum); 

//palindrome
var P = (str) => {
var reversed = str.split('').reverse().join('');
    return str === reversed;
};
var getp = (arr) => arr.filter(str => P(str));
var words = ["ravi", "level", "hello", "sir"];var palindromes = getp(words);
console.log(palindromes);
