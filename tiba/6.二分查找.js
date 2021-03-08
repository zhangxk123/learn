function binarySearch(arr,target){
  let low=0;
  let high=arr.length-1;
  let mid;
  while (low<=high) {
    mid=Math.floor((low+high)/2);
    if(target==mid){
      return arr[mid]
    }
    if(target<mid){
      high=mid-1;
    }
    if(target>mid){
      low=mid+1;
    }
  }
  return -1
}