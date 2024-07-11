export const twoSum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] === target) {
      return [arr[left], arr[right]];
    }
    if (arr[left] + arr[right] > target) {
      right--;
      continue;
    }
    if (arr[left] + arr[right] < target) {
      left++;
      continue;
    }
  }
};

export const threeSum = (nums) => {
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let comp = 0 - nums[i];
    let twoNums = twoSum(nums.slice(i + 1), comp);
    console.log(comp, nums.slice(i + 1), twoNums);
    if (twoNums) {
      result.push([nums[i], ...twoNums]);
    }
  }
  console.log(result);
  return result;
};
