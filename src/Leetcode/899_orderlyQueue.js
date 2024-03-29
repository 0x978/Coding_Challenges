/*
https://leetcode.com/problems/orderly-queue/description/
You are given a string s and an integer k.
You can choose one of the first k letters of s and append it at the end of the string.

Return the lexicographically smallest string you could have after applying the mentioned step any number of moves.
 */

var orderlyQueue = function(s, k) {
    if(k > 1){ // if k>1 then the best permutation of the string is possible.
        return s.split("").sort().join("")
    }
    else{
        let temp = s
        for(let i = 0; i < s.length;i++){ // creating permutations of possible strings, and then comparing to see if its better. By end gives us best string
            s = s.substring(1,s.length) + s.charAt(0)
            temp = temp < s  ? temp : s
        }
        return temp
    }
};

console.log(orderlyQueue("cba",1))