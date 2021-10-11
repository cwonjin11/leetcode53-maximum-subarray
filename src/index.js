

//nums = [-2,1,-3,4,-1,2,1,-5,4]
function maxSubArray(nums) {
    if(nums.length === 1){
        return nums[0];
    }
    let maxValue = nums[0];
    let accNum = nums[0];
    
    
    for(let i=1; i<=nums.length; i++){
        let calc = Math.max(nums[i], accNum + nums[i])
        if (calc > maxValue) 
            maxValue = calc;
        accNum = calc       // set accNum as calc so I can iterate through more bigger accNum compared to the previous accNum
    }
    return maxValue;

};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([1]))
console.log(maxSubArray([5,4,-1,7,8]))