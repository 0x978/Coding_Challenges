/*
https://leetcode.com/problems/fizz-buzz/
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 */

var fizzBuzz = function(n) {
    let arr = ["1"]
    for(let i = 2; i <= n ; i++){
        if(i % 3 === 0 && i % 5 === 0 ){arr.push("FizzBuzz")}
        else if(i % 3 === 0){arr.push("Fizz")}
        else if(i % 5 === 0){arr.push("Buzz")}
        else{arr.push(i.toString())}
    }
    return arr
};

console.log(fizzBuzz(20))

