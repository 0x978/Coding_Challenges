// https://leetcode.com/problems/longest-consecutive-sequence/description/
//Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

// this is On(logn)
function longestConsecutive(nums: number[]): number {
    nums = nums.sort((a,b) => a-b)
    let hash = new Map()

    for(let i = 0; i < nums.length;i++){
        let down = nums[i] - 1
        let upConsec = hash.get(down)

        if(upConsec){
            hash.set(nums[i],upConsec+1)
        }
        else{
            hash.set(nums[i],1 )
        }
    }

    let vals = Array.from(hash.values())
    let max = 0
    for (let i = 0; i < vals.length;i++){
        if(vals[i] > max){
            max = vals[i]
        }
    }
    return max
};

// Still On(logn) but less complicated
function longestConsecutive_2(nums: number[]): number {
    if (nums.length === 0) return 0
    nums = nums.sort((a,b) => a-b)

    let prev = nums[0]
    let count = 1
    let max = 1
    for(let i = 1 ; i< nums.length;i++){
        let neg = nums[i] - 1
        if(prev === neg) count++
        else if (prev !== nums[i]) count = 1
        if(count > max) max = count
        prev = nums[i]
    }
    return max
};

console.log(longestConsecutive_2([1,2,0,1]))