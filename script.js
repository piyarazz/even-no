// const arr = [1, 5, 8, 9, 20, 6, 9, 10];
// const evenArr = arr.filter((num) => num % 2 === 0);
// console.log(evenArr);

let arr = [1,5,8,9,20,6,9,10];
let evenArr = [];

for(let i=0; i<arr.length; i++){
  if(arr[i] % 2 === 0){
    evenArr.push(arr[i]);
  }
}

console.log(evenArr);


