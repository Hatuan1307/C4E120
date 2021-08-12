function bubbleSort(array) {
    for (var i = 0; i < array.length - 1; ++i) { // vòng lặp chạy mảng
        for (var j = 0; j < array.length - 1 - i; ++j) { // vòng lặp so sánh
            if (array[j] > array[j + 1]) {
            var flag = array[j]; // cắm cờ
            array[j] = array[j + 1]; // gán vị trí mảng mới
            array[j + 1] = flag; // đảo vị trí số
            }
        }
    }
}
    var arr = [-1, 15, -19, 50, 69, 2];
    bubbleSort(arr);
    console.log(arr);

// ý kiến trợ giảng: bài làm OK