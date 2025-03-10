function InsertionSort(arr){

  for(let i =1;i<arr.length;i++){

    let NumberToInsert = arr[i];
    let j =i-1;

    while(j>=0&&arr[j]>NumberToInsert){
      arr[j+1] = arr[j];
      j--;
  }

  arr[j+1] = NumberToInsert;
  }
}
const array = [4,65,-76,4,0,3,6,7];
InsertionSort(array);

console.log(array)