function upperCase(a) {
   var chuDauTien = a.slice(0,1);
   var conLai = a.slice(1);
   chuDauTien = chuDauTien.toUpperCase();
   a = chuDauTien.concat(conLai);
   return a;
}


function camelize(str) {
    var arr = str.split('-');
    for (i = 0; i < arr.length; i++) {
       arr[i] = arr[i].trim();
    }
    var firstWord = arr.shift();
    var newArr = arr.map(function upperCase(a) {
      var chuDauTien = a.slice(0,1);
      var conLai = a.slice(1);
      chuDauTien = chuDauTien.toUpperCase();
      a = chuDauTien.concat(conLai);
      return a;
    })
    newArr.unshift(firstWord)
    return (newArr.join(''));
}

console.log( camelize('you-are-the-best'));




