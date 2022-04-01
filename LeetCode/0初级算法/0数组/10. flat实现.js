function flat(arr, depth = 1) {
  let flagByArray = false; // no array
  while (depth > 0) {
    if (depth === 0 || flagByArray === true) return arr;
    flatImp(arr);
    depth--;
  }
  function flatImp(arr) {
    let flag = 0;
    arr.forEach((x, i) => {
      if (Array.isArray(x)) {
        flag++;
        arr.splice(i, 1, ...x);
      }
    });
    flagByArray = flag === 0;
  }
  return arr;
}
//test
const arr=[1,[2,[3,[4,[5,[6]]]]]]

flat(arr,Infinity)