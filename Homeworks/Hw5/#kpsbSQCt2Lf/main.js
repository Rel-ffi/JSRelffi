
let swap = (arr, index1 , index2) => {
    console.log(arr);
    let tempValue = 0;
    tempValue = arr[index2]
    arr[index2] = arr[index1];
    arr[index1] = tempValue;
    console.log(arr);
}

swap([11,22,33,44],0,1);
