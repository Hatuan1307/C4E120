function filterRangeInPlace(arr, a, b) {
    for (i = 0; i < arr.length; i ++) {
        if (Number.isFinite(arr[i]) && (a <= b)) {
            var arr = arr.filter(arr => (arr >= a && arr <= b));
            return arr;
        }
    }
}
console.log(filterRangeInPlace([1, 6, 7, 9, 7, 6], 4, 9));