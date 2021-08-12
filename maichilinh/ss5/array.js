var arrName = ["Linh","Dũng","Anh","Tuấn","Vũ"];
var arrHeight=[180,175,165,185,160];
console.log(arrName);
console.log(arrHeight);
console.log("Lớp mình có: "+arrName.length+" học viên");
console.log(arrName[0]+" "+arrHeight[0]); // in bạn đầu tiên
for(let index = 0; index < length ; index++){
    if(arrName[index]==="Linh"){
        console.log("Mình tên là "+ arrName[index]+" ở vị trí thứ "+ index + "chiều cao "+ arrHeight[index])
    }
}
for(let index = 0; index < arrName.length; index++){
    console.log("Bạn "+arrName[index] +"   Cao: "+ arrHeight[index]);  
} 
arrName.shift(); // xóa phần tử đầu
arrHeight.shift();
console.log("Danh sách lớp sau khi xóa bạn đầu tiên")
for(let index = 0; index < arrName.length; index++){
    console.log("Bạn "+arrName[index] +"   Cao: "+ arrHeight[index]);  
} 
let remove = arrName.pop() +" " +arrHeight.pop(); // xóa phần tử cuối
console.log(remove);
var target = arrName[0];
console.log(target); // tên của target được gắn
arrName.push("Như");
arrHeight.push(155);
arrName.push("Thủy"); // thêm vào cuối mảng
arrHeight.push(160);
arrName.unshift("Linh"); // thêm vào đầu mảng
arrHeight.unshift(180);
console.log("Danh sách lớp sau khi thêm")
for(let index = 0; index < arrName.length; index++){
    console.log("Bạn "+arrName[index] +"   Cao: "+ arrHeight[index]);  
} 
let indexTarget = arrName.indexOf(target); // lấy vị trí index của phần tử
console.log("Vị trí của target trong mảng là: " +indexTarget);
console.log(arrName.slice(0 , 4)); // lấy 1 đoạn trong mảng
console.log(arrName.slice(indexTarget));
console.log(arrName.splice(indexTarget,1));
console.log(arrHeight.splice(1,1));
let pos = arrName.indexOf("Linh");
arrName[pos]="Hạnh";
arrHeight[pos]=177;
console.log("Danh sách lớp sau khi update")
for(let index = 0; index < arrName.length; index++){
    console.log("Bạn "+arrName[index] +"   Cao: "+ arrHeight[index]);  
} 
console.log("Giảng viên Hạnh không ở trong lớp đang ở vị trí "+ arrName.indexOf("Hạnh"));
if(arrName.indexOf("Thành") >= 0){
    console.log("Trợ giảng không ở trong lớp|đang ở lớp tại vị trí "+ arrName.indexOf("Thành"));
} else{
    console.log("Ô nô, bạn chưa thêm trợ giảng vào đấy!")
}
console.log("Danh sách học viên đã tốt nghiệp");
for(let index = 0; index < arrName.length; index++){
    console.log("Bạn "+arrName[index] +"   Cao: "+ arrHeight[index] +" -Đã tốt nghiệp");  
} 

/* 
  - Xem lại dòng 7 nhé
  - Mình cần bạn check tên giảng viên như check tên của bản thân,
  nên in thẳng ra là nhanh quá nhé :D
  - Các bạn học viên đã tốt nghiệp, chứ giảng viên thì không, 
  cái này tương tự như khi in tên bản thân ra thôi nhé
  - Nên comment yêu cầu/đề bài vào đầu mỗi khối code xử lý yêu cầu đó cho dễ hiểu,
  dễ theo dõi, dễ xử lý        
*/