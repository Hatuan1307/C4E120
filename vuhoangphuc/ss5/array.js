function timPhuc(tim) {
    if (tim == 'Phúc') {
        return tim;
    }
}

let arrayTen = ["Dũng",'Anh','Tuấn','Vũ','Phúc','Tú'];
let arrayChieuCao = [174, 180 , 171, 184, 173, 175];
console.log(arrayTen);
console.log(arrayChieuCao);
console.log('lớp mình có', arrayTen.length, 'bạn.');
console.log('Bạn đầu tiên tên là', arrayTen[0], ', cao', arrayChieuCao[0], 'cm.');
console.log('Bạn cuối cùng tên là', arrayTen[5], ', cao', arrayChieuCao[5], 'cm.');

//tìm tên bản thân
let stt = arrayTen.findIndex(timPhuc);
console.log('Mình tên là', arrayTen[stt], ', ở vị trí', stt, ', cao', arrayChieuCao[stt], 'cm.' );

//in tên cả lớp
for (u = 0; u < arrayTen.length; u ++) {
    console.log('Bạn', arrayTen[u], 'cao', arrayChieuCao[u], 'cm.');
}

//xóa học viên đầu tiên
console.log('Xóa bạn đầu tiên:',arrayTen.shift());
arrayChieuCao.shift();

//xóa học viên cuối cùng
console.log('Xóa bạn cuối cùng:',arrayTen.pop());
arrayChieuCao.pop();

//in tên học viên đầu cuối
let target = arrayTen[0];
console.log('Bạn đầu tiên tên là', target, ', cao', arrayChieuCao[0], 'cm.');
console.log('Bạn cuối cùng tên là', arrayTen[arrayTen.length-1], ', cao', arrayChieuCao[arrayChieuCao.length-1], 'cm.');

//thêm 2 học viên nữ
arrayTen.push('Như');
arrayChieuCao.push(165);
arrayTen.unshift('Phương');
arrayChieuCao.unshift(163);

//kiểm tra số thứ tự biến target
let indexTarget = arrayTen.indexOf(target);
console.log('Số thứ tự mới của target là',indexTarget);

//slice ra các học viên nam
console.log(arrayTen.slice(1,-1));

//splice target
arrayTen.splice(indexTarget, 1);
arrayChieuCao.splice(indexTarget, 1);

//thay bản thân bằng giảng viên
let selfIndex = arrayTen.indexOf('Phúc');
arrayTen.splice(selfIndex, 1, 'Hạnh');
arrayChieuCao.splice(selfIndex, 1, 175);

console.log(arrayTen);

//kiểm tra giảng viên và trợ giảng có ở trong lớp không
let giangVien = arrayTen.indexOf('Hạnh');
let troGiang = arrayTen.indexOf('Thành');
if (giangVien == -1) {
    console.log('Giảng viên không ở trong lớp');
} else {
    console.log('Giảng viên đang ở lớp tại vị trí', giangVien);
}
if (troGiang == -1) {
    console.log('Trợ giảng không ở trong lớp');
} else {
    console.log('Trợ giảng đang ở lớp tại vị trí', troGiang);
}

//tốt nghiệp
for (j = 0; j < arrayTen.length; j++) {
    arrayTen[j] += ' - đã tốt nghiệp.'
    console.log(arrayTen[j]);
}