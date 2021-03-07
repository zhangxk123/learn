function quickSort(arr){
  //排序函数
  quick(arr,0,arr.length-1)
  function quick(arr,left,right){
    if(arr.length<2){
      return arr
    }
    //找轴
    let index=partition(arr,left,right);
    //如果轴左有数，说明有小数组没排序
    if(left<index-1){
      quick(arr,left,index-1);
    }
    //如果轴右有数，说明有大数组没排序
    if(right>index){
      quick(arr,index,right);
    }
  }
  //划分
  function partition(arr,left,right) {
    //建议取中间位置
    let pivot=arr[Math.floor((left+right)/2)];
    let i=left;
    let j=right;
    while (i<=j) {
      while (arr[i]<pivot) {
        i++
      }
      while (arr[j]>pivot) {
        j--
      }
      if(i<=j){
        swap(arr,i,j);
        i++;
        j--
      }
    }
    return i
  }
  //交换
  function swap(arr,a,b) {
    const tmp=arr[a];
    arr[a]=arr[b];
    arr[b]=tmp;
  }
}

// let arr=[5,3,7,8,2,4,10];
// quickSort(arr)
// console.log(arr)