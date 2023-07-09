function smaller(nums) {
  // let count = 0;
  // const result = [];
  // for (let i = 0; i < nums.length; i+=1) {
  //   count = 0;
  //   const num = nums[i];
  //   for (let sub =(i+1)  ; sub < nums.length; sub+=1) {
  //     const nextNum = nums[sub];
  //       if (nextNum < num) {
  //         count+=1;
  //       }
  //   }
  //   result.push(count);
  // }
  // return result

  // another let's see
  const result = [];
  for (let index = 0; index < nums.length; index += 1) {
    const num = nums[index];
    result.push(nums.slice(index + 1).filter((n) => n < num).length);
  }
  return result;
}

console.log(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
console.log(smaller([1, 2, 3]), [0, 0, 0]);
console.log(smaller([1, 2, 0]), [1, 1, 0]);
console.log(smaller([1, 2, 1]), [0, 1, 0]);
console.log(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0]);
