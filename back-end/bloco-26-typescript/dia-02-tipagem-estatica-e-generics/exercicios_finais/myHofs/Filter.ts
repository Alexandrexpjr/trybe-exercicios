type callBackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter(array: Array<any>, callback: callBackFilter<any>): Array<any> {
  let newArray: Array<any> = [];
  for(let index = 0; index < array.length; index += 1) {
    let current = array[index];
    if (callback(current, index, array)) {
      newArray.push(current);
    }
  }
  return newArray;
}

console.log(myFilter(
  [1, 2, 3, 4],
  (item) => {
    return item !== 2
  }
));