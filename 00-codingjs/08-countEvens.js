function countEvens(nums) {
  let counter = 0;
  for (let theNum of nums) {
    if (theNum % 2 === 0) {
      counter++;
    }
  }
  return counter;
}