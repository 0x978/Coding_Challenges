/*
https://leetcode.com/problems/find-the-difference/
You are given two strings s and t.

String t is generated by random shuffling string s and then add one more letter at a random position.

Return the letter that was added to t.
 */
var findTheDifference = function(s, t) {
    for(let i = 0; i < s.length; i++){
        t=t.replace(s[i],"")
    }
    return t
};

console.log(findTheDifference("abcd","abcde"))