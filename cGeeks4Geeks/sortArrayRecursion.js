function mergeSort(arr) {    //MergeSort
    if (arr.length > 2) return mergeSort([...mergeSort(arr.slice(0, parseInt(arr.length / 2))),
    ...mergeSort(arr.slice(parseInt(arr.length / 2)))]);
    else if (arr.length === 2) return [arr[0], arr[1]] = [arr[1], arr[0]] //merge();
    else return arr;

    // function merge(arr1, arr2) {

    // }

}



arr = [5, 3, 1];
//arr = [5, 2, 6, 1, 8, 9, 3];
console.log(mergeSort(arr));