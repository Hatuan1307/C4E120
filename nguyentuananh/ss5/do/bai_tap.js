var nameOfStudents = ['Dũng', 'Anh', 'Tuấn', 'Vũ', 'Tú'];
var heightOfStudents = ['1.60', '1.68', '1.70', '1.88', '1.90'];

console.log(nameOfStudents);
console.log(heightOfStudents);

console.log("Lớp mình có " + nameOfStudents.length + " bạn")

console.log("Bạn đầu tiên tên là " + nameOfStudents[0] + " cao " + heightOfStudents[0] + " m")

console.log("Bạn cuối cùng tên là " + nameOfStudents[4] + " cao " + heightOfStudents[4] + " m")

console.log("Mình tên là " + nameOfStudents[1] + " ở vị trí " + nameOfStudents.indexOf("Anh") + " cao " + heightOfStudents[1] + " ở vị trí " + heightOfStudents.indexOf("1.68"))

for(let i = 0; i < nameOfStudents.length; i++){
    console.log("Bạn " + nameOfStudents[i] + " cao " + heightOfStudents[i] + " m")
}

console.log(nameOfStudents.shift() + " " + heightOfStudents.shift());

console.log(nameOfStudents.pop() + " " + heightOfStudents.pop());

let target = nameOfStudents[0] ;
console.log(target)
// thêm 2 bạn nữ
nameOfStudents.push("Như");
heightOfStudents.push("1.55");
nameOfStudents.unshift("Phương");
heightOfStudents.unshift("1.63");

let indexTarget = nameOfStudents.indexOf(target);
console.log(indexTarget);
// in tên các bn nam trong lớp dùng slice
console.log(nameOfStudents.slice(1,4));
console.log(heightOfStudents.slice(1,4));
// xóa học viên nam ở vị tri indextarget,thay tên Bản thân bằng tên giảng viên và chiều cao tương ứng
nameOfStudents.splice(1, 1, "Hạnh");
heightOfStudents.splice(1, 1, "1.75");

if(nameOfStudents.indexOf("Hạnh") == -1){
    console.log("Giảng viên không ở trong lớp");
}else{
    console.log("Giảng viên đang ở trong lớp tại vị trí " + nameOfStudents.indexOf("Hạnh"));
}

if(nameOfStudents.indexOf("Thành") == -1){
    console.log("Trợ giảng không ở trong lớp")
}else{
    console.log("Trợ giảng đang ở trong lớp tại vị trí " + nameOfStudents.indexOf("Thành"));
}
// thay thế tên tất cả các bn học viên bằng cụm từ đã tốt nghiệp
nameOfStudents.splice(0, 5, "đã tốt nghiệp");
console.log(nameOfStudents)

/* 
  - Nên comment yêu cầu/đề bài vào đầu mỗi khối code xử lý yêu cầu đó cho dễ hiểu, dễ theo dõi, dễ xử lý
  - Để truy cập phần tử cuối của mảng, dùng arr[arr.length - 1]
  - Để in tên mình, bạn phải dùng for, so sánh xem tên mình với mỗi phần tử
    nếu trùng thì in ra
  - Việc lưu indexTarget để bạn thay vào 
    nameOfStudents.splice(indexTarget, 1, "Hạnh"); luyện tập thêm để hiểu hơn về cách
    sử dụng hoặc các trường hợp có thể/không thể/nên/không nên sử dụng biến nhé
  - Thay thế tên học viên, chứ không thay tất cả, nghĩa là tên
    giảng viên phải giữ nguyên
*/