/* Tìm MIN, MAX
Kĩ thuật gắn cờ: Cho 1 mảng [4, 3, 5, 7]
Kĩ thuật gắn cờ: luôn gán phần tử đầu tiên là max: gắn cờ cho phần tử đầu tiên là max


*/
let num = prompt("");
let numArr = num.split(",");
for (let i = 0; i < numArr.length; i++) {
    numArr[i] = +numArr[i]

}
console.log(numArr);


let max = numArr[0];
// giá trị omega: độ phức tạp
// Object(N): N là số lượng phần tử => mảng tối ưu nhất khi có N lần duyệt thì tìm dc max
for (let i = 1; i < numArr.length; i++) { // i được tính từ phần tử số 1, không còn phần tử số 0 vì phần tử 0 đã dc gán là max rồi
    if(max < numArr[i]) {
        max = numArr[i];
    }

} console.log(max);

let min = numArr[0];
for (let i = 1; i < numArr.length; i++) { // i được tính từ phần tử số 1, không còn phần tử số 0 vì phần tử 0 đã dc gán là max rồi
    if(min > numArr[i]) {
        min = numArr[i];
    }

} console.log(min);








