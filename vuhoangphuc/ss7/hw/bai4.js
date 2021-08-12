function sumInput() {
  var n = prompt('nhập nhiều số, ngăn cách bởi dấu phẩy:');
  var arr = n.split(',');
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
     arr[i] = +(arr[i].trim());
     if (Number.isFinite(arr[i])) {
       sum += arr[i];
     } else break;
  }
  console.log(sum);
}
sumInput();
