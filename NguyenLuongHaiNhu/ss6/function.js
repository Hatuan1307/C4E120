// Hàm function: nếu các biến có cùng 1 chức năng thì sẽ viết bằng hàm này
// có 1 cái quạt: có 4 nút: nut 0, 1, 2, 3: chức năng hành động của quạt
// function tênFunction () {}
/*
function actionFan() {

}

function sum() {
    console.log("5 + 10 = ",5+ 10); // cần phải khai báo biến/ hàm để thực thi
}
sum() // => nhớ khai báo te6nFunction với đầy đủ các yếu tố bên trong ()
// khai báo hàm với tham số: yếu tố trong ()
// khi khai báo thêm hàm function mới: sẽ dc ghi đè lên hàm function trước đó
 function sum(a, b) { // tham số: cách đạt tên giống đặt tên biến
    console.log(a);
 }
 sum(7, 10) // để thực thi: gán a  b bằng biến dc khai báo ở đây
// nếu ko gán giá trị đủ tương ứng với a/ b: sẽ ra undefined
*/
/*
function sum(a, b) { 
    console.log(a + b);
 }
 sum(100, 10) // => kết quả ra 17
 sum(1, 10)
 sum(4, 10)
 sum(13, 10)
 */
/*
 function max(arr) {
     let max = arr[0]
    for (let i = 1; i < numArr.length; i++) { // i được tính từ phần tử số 1, không còn phần tử số 0 vì phần tử 0 đã dc gán là max rồi
        if(max < arr[i]) {
            max = arr[i];
        }
    
    } console.log(max);
 }
 max ([3, 4, 7, 5])
 max ([3, 9, 10, 6])
 max ([8, 4, 19, 5])
*/
function fanSpeed(button) {
    switch (button) {
        case 0:
            console.log("Turn of fan.");
            break;
        case 1:
            console.log("Vù vù");
            break;
        case 2:   
            console.log("Phù phù.");
            break;
        case 3:
            console.log("Ù ù.");
            break;
        default:
            break;
    }
}
fanSpeed(0)
fanSpeed(3)
fanSpeed(1)
fanSpeed(2)

// BTVN: 
function isPrime(num) {
   // let prime = true;
    if(num<= 1) {
    return false
    }
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if(num % i == 0) {
            // cách 1: khi ko dùng return thì cần dùng gán biến prime là true trước
           // prime = false
           // break
           // cách 2: khi có return thì ko cần phải gán biến prime nữa
           return false
        }
    }
    //return prime;
    return true;
}
//let x = isPrime(14)
//console.log(x);
for (let i = 1; i < 100; i++) {
    if (isPrime(i))
    console.log(i);
}

// BTVN: viết function cho sort cho 1 array để trả về bubble sort
// function sort(arr) {}
// [4,1,5,6,67] => yêu cầu: sắp xếp theo kiểu tăng dần/ giảm dần

/* hàm return: trả về giá trị
function max(arr) {
    let max = arr[0] // nếu để return ở đây: thì chỉ in ra 3, 3, 8 thôi
   for (let i = 1; i < numArr.length; i++) { // i được tính từ phần tử số 1, không còn phần tử số 0 vì phần tử 0 đã dc gán là max rồi
       if(max < arr[i]) {
           max = arr[i];
       }
   return max // return giống break: gặp return ở đâu: sẽ dừng tại đấy => sẽ log ra 7, 10, 19
   }
}
let a = max([3, 4, 7, 5])
let b = max([3, 9, 10, 6])
let c = max([8, 4, 19, 5])
let bigMax = [a, b, c]
console.log(max(bigMax));
*/


