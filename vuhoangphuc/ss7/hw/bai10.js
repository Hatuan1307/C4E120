function copySorted(oldArr) {
    var newArr = [];
    var arr = oldArr.slice();
    var long = oldArr.length;
    var max;
    for (i = 0; i < long; i ++) {
       minLength = Number.POSITIVE_INFINITY;
       for (k = 0; k < (long - newArr.length); k++) {
         if (arr[k].length < minLength) {
           minLength = arr[k].length;
           min = arr[k];
         }}
       arr.splice(arr.indexOf(min), 1);
       newArr.push(min)
    }
return newArr;
}
var a = ['hello', 'greetings', 'hi', 'whatsup'];
var b = copySorted(a);
console.log(b);
console.log(a);