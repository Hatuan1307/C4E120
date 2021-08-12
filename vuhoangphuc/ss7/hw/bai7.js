function filterRange(arr, a, b) {
    for (i = 0; i < arr.length; i ++) {
        if (Number.isFinite(arr[i]) && (a < b)) {
            var newArr = arr.filter(arr => (arr > a && arr < b));
            return newArr;
        }
    }
}
console.log(filterRange([1, 6, 7, 9, 7, 6], 4, 9));