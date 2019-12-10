const mergeSort=(arr)=>{
  //removes the left part using the slice method so we are left with the right part of the array only.
  if(arr.length < 2){
    return arr;}
  const left = arr.splice(0,1);
  return merger(mergeSort(left),mergeSort(arr));}

const merger=(left,right)=>{
  //new function that combines both left and right parts and returns the sorted list.
  const arr = [];
  while(left.length && right.length){
    if(left[0] < right [0]){
      arr.push(left.shift())
      //removes the left part and pushes into the array.
    }else{
      arr.push(right.shift())}}
      //removes the right part and pushes into the array.
  return [...arr,...left,...right];}

console.log(mergeSort([10,5,3,8,2,6,4,7,9,1]));
