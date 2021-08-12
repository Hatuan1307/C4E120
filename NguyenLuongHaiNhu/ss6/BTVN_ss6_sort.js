
let arr = [4, 1, 26, 15, 67, 33, 68];
let x = arr[0];
y = arr[1]
arr.sort(function (x, y) {
    if (x > y) {
        return 1;
    } else if (x < y) {
        return -1;
    } else {
        return 0
    }
});
console.log(arr);

arr.sort(function (x, y) {
    if (x > y) {
        return -1;
    } else if (x < y) {
        return 1;
    } else {
        return 0
    }
});
console.log(arr);

/* 
  Ý kiến trợ giảng:
  Chị không cần gán dòng 3, 4, các biến x,y trong hàm sort()
  là được tự gán lần lượt bằng các phần tử trong mảng chứ không phải là các giá trị nhận ở bên trên
*/







