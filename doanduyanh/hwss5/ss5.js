var arrayName = ["Dũng", "Tuấn", "Anh", "Vũ", "Tú", "Quân", "Quang"];
var arrayHeight = [172, 165, 170, 180, 175, 176, 177];
//In ra 2 mảng vừa tạo
console.log(arrayName);
console.log(arrayHeight);

//In ra số các bạn trong lớp
console.log("Lớp mình có " + arrayName.length + " bạn");

//In ra tên bạn đầu tiên trong lớp và chiều cao tương ứng
console.log("Bạn đầu tiên là " + arrayName[0] + " " + arrayHeight[0] + "cm");

//In ra tên bạn cuối cùng trong lớp và chiều cao tương ứng
console.log("Bạn cuối cùng là " + arrayName[arrayName.length - 1] + " " +  arrayHeight[arrayName.length - 1] + "cm");

//In ra tên BẢN THÂN, chiều cao BẢN THÂN và vị trí ở trong lớp
for(let i = 0; i < arrayName.length; i++) {
    if(arrayName[i] === "Anh")
        console.log("Mình tên là " + arrayName[i] + " ở vị trí " + i + " cao " + arrayHeight[i] + "cm");
}

//In ra tên, chiều cao tương ứng của cả lớp
for(let i = 0; i < arrayName.length; i++) {
    console.log("Bạn " + arrayName[i] + " ở vị trí thứ " + i + " cao " + arrayHeight[i] + "cm");
}

//Xóa bạn đầu tiên và chiều cao tương ứng trong lớp rồi in ra tên bạn này
console.log(arrayName.shift() + arrayHeight.shift());

//Xóa bạn cuối cùng và chiều cao tương ứng trong lớp rồi in ra tên bạn này
console.log(arrayName.pop() + arrayHeight.pop());

//In ra bạn đầu tiên (lưu tên bạn này với biến target) và cuối cùng trong lớp tương tự như yêu cầu bên trên
let target = arrayName[0];
console.log(target);
console.log(arrayName[arrayName.length - 1]);

//Thêm tên 2 học viên NỮ và chiều cao tương ứng
arrayName.push("Như"); 
arrayHeight.push(160);
arrayName.unshift("Hằng");
arrayHeight.unshift(162);

//Kiểm tra xem bạn học viên được lưu bằng biến target giờ có vị trí thứ mấy? lưu vào biến indexTarget (dùng hàm indexOf()
console.log(arrayName.indexOf(target));
indexTarget = arrayName.indexOf(target);

//In ra tất cả các bạn học viên NAM (chính ra in ra các bạn bắt đầu từ indexTarget đến hết, dùng hàm slice()
console.log(arrayName.slice(indexTarget, arrayName.length - 1));

//Xóa học viên NAM ở vị trí indexTarget và chiều cao tương ứng (dùng hàm splice())
arrayName.splice(indexTarget, 1);
arrayHeight.splice(indexTarget, 1);
console.log(arrayName);
//Thay tên BẢN THÂN bằng tên giảng viên và chiều cao tương ứng (sử dụng hàm splice()
for(let i = 0; i < arrayName.length; i++) {
    if(arrayName[i] === "Anh") {
        arrayName.splice(i, 1, "Hạnh");
        arrayHeight.splice(i, 1, "190");
    }
}
// console.log(arrayName);

//Kiểm tra xem trong mảng tên trên có tên giảng viên ("Hạnh") không
let check1 = 0;
for(let i = 0; i < arrayName.length; i++) {
    if(arrayName[i] === "Hạnh") {
        console.log("Giảng viên đang ở lớp tại vị trí " + i);
        check1 = 1;
    }
}
if(check1 == 0) {
    console.log("Giảng viên không ở trong lớp");
}

//Kiểm tra xem trong mảng trên có tên trợ giảng ("Thành") không
let check2 = 0;
for(let i = 0; i < arrayName.length; i++) {
    if(arrayName[i] === "Thành") {
        console.log("Giảng viên đang ở lớp tai vị trí " + i);
        check2 = 1;
    }
}
if(check2 == 0) {
    console.log("Giảng viên không ở trong lớp");
}

//Thay thế tất cả tên các học viên - bằng cụm từ "đã tốt nghiệp"
for(let i = 0; i < arrayName.length; i++) {
    arrayName[i] = "đã tốt nghiệp";
}
console.log(arrayName);

/*
- Bài làm tốt, tuy nhiên thay tên tất cả học viên chứ không phải thay tất cả
các phần tử, nên tên giảng viên vẫn cần được giữ lại
- Thay vì dùng biến check có kiểu số, có thể dụng luôn kiểu boolean
  if(arrayName[i] === "Hạnh") {
    check = true

  if (check)
    consone.log()
*/