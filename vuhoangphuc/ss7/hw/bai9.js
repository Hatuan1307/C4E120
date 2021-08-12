function descendingOrder(arr) {
    var newArr = [];
    var long = arr.length;
    var max;
    for (i = 0; i < long; i ++) {
       max = Number.NEGATIVE_INFINITY;
       for (k = 0; k < (long - newArr.length); k++) {
       if (arr[k] > max) {
        max = arr[k];
       }}
       arr.splice(arr.indexOf(max), 1);
       newArr.push(max)
    }
arr = newArr;
return arr;
}
console.log(descendingOrder([5, 2, 1, -10, 8]));
