// primitive types: biến nguyên thủy bằng số
/*
let a = 5;
let b= 10;
a = b;
b = 15;
console.log(a, b); // lúc này a đã dc gán bằng 10, thì b k bị ảnh hưởng gì => lúc này a = 10, b= 15
// Tuy nhiên, kiểu refence
// Kiểu array: là 1 nhóm các giá trị cùng chung 1 mục đích/ cách phân loại: VD: cùng lưu số lượng sản phẩm.
// array rất tốn bộ nhớ của máy. Nó có thể chứa toàn bộ các kiểu giá trị của loại primitive types và reference types

// có 2 cách tạo chính
// - dùng []
let arr1 = [3, "hello", true, false, undefined]
// chỉ số của array bắt đầu bằng 0: start of index = 0
// end of index: length - 1 : số lượng phần tử index trừ 1
console.log(arr1.length);
console.log(arr1[2]); // => sẽ ra "true"

// cách khai báo thứ 2:
// dùng newArray()
let arr = newArray() // new array dùng cho mục đích: khai báo mảng mà chưa cần thêm phần tử: cách này tối ưu bộ nhớ hơn

// có các loại array đa chiều: VD tridimension (3 chiều); dualdimension (2 chiều)
 
 
//Muốn thay đổi tên 1 phần tử bằng vị trí
arr1[2] = "ok" // vị trí số 2 từ "true" chuye63nt hành "ok"

// thêm phần tử:
/*
arr1.push(5) // số lượng phần tử tự thêm 1 phần tử số 6 là "5"

let x = arr1.push(5)
console.log(x);
let length = arr1.push(10)
console.log(length);
*/
// xóa phần tử cuối cùng trong mảng
/*
arr1.pop() 
let x = arr1.pop()
console.log(x); // => sẽ trả về giá trị bị lấy ra: chính là 10

// xóa phần tử đầu tiên của mảng: shift
// nếu mảng ko có giá trị nào, thì shift sẽ trả về undefined
// thêm phần tử mới vào đầu mảng: unshift
arr1.toString()
arr1.join("==") // => thêm vào giữa các phần tử 1 yếu tố. VD: ==

// regex


//Create  Read Update  Delete: đối với dữ liệu sẽ có 4 hành động: tạo, thêm, bớt
*/
/*
let arr1 = [3, "hello", true, false, undefined]
for( let i = 0; i < arr1.length; i+=) {
    if(arr1[i]) // bỏ qua undefined: vì torng bảng truthy/ falsy: undefine thuộc nhóm giá trị false => nên sẽ bị bỏ qua khi đi vào nhóm giá trị true
    console.log(ar1[i]);
}
*/

// Phương thức biến 1 string thành 1 mảng
// " he hi ke ok": yêu cầu: string phải có những quy tắc để có thể tách thành từng phần tử
// cách để tách: 
// dùng biểu thức split
//" he hi ke ok".split(" ")
/*
let products = prompt("Mỗi sản phẩm cách nhau một dấu phẩy:")// VD yêu cầu: mỗi sản phẩm cách nhau 1 dấu phẩy
productsArr = products.split(",")
console.log(productsArr);
*/
// Bài toán: cho người dùng nhập vào sản phẩm mua. 
// Nếu sản phẩm này tồn tại: tính tiền và lưu vào tổng đơn
// Nếu sản phẩm không tồn tại: báo với người dùng là sản phẩm không có , và không tính tiền
// Nếu kho sản phẩm chỉ bán những danh mục sản phẩm cố định, thì ta dùng switch case

/*
let products = prompt("Mỗi sản phẩm cách nhau một dấu phẩy:");// VD yêu cầu: mỗi sản phẩm cách nhau 1 dấu phẩy
// hàm trim: xóa toàn bộ dấu cách do quá trình nhập vào
let productsArr = products.split(",")
let total = 0;
// muốn tính tiền của từng sản phẩm: tạo thêm biến count
let countDuck = 0;
let countChicken = 0;

for (let i = 0; i < productsArr.length; ++i) {
    let nameOfproducts = productsArr[i].trim()
    switch (nameOfproducts) {
        case "vịt":
            //total += 200;
            countDuck++;
            break;
        case "gà":
            //total += 150;
            countChicken++;
            break;
        
        default:
            console.log("Sản phẩm ", nameOfproducts, " không tồn tại.");
            break;
    }
}
total = 200*countDuck + 150*countChicken;
console.log("Bạn mua ", countChicken, " con gà");
console.log("Bạn mua ", countDuck, " con vịt");
console.log("Tổng hóa đơn là: ",total)
*/










