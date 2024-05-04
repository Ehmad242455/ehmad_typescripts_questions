function removeFalseValues(arr: any[]): any[] {
  return arr.filter((value) => !!value);
}
const array = [false,null,0,"",undefined,NaN,1,"hello",true];
const filteredArray = removeFalseValues(array);
console.log(filteredArray);